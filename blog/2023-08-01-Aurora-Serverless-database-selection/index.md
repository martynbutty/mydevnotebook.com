---
title: Aurora Serverless Database Selection
description: How to decide if an Aurora serverless database is right for you
authors: [martyn]
hide_table_of_contents: false
---
With the end of life of MySQL 5.7, you may be considering upgrading to Aurora serverless V2. Here I'll briefly discuss database selection, focussing on Aurora serverless V2 considerations and cluster configuration for production use. Aurora serverless V2 is a way of running a MySQL database without having to worry about the compute required for the predicted load.

![Data Store Image](./jan-antonin-kolar-unsplash.jpg)

Photo by [Jan Antonin Kolar](https://unsplash.com/@jankolar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on unsplash.com

## To SQL or not to SQL
If you are changing the DB for your application, you should first consider **if a relational database is still the best datastore for your application**. For example, you may get cost, scalability and performance benefits by using a DynamoDB instead.

Migrating to a non-relational DB is a larger piece of work, so you need to consider your future plans for your application and involve your product counterpart in your planning. You should try to identify tradeoffs, benefits and potential problems with the different approaches.

## To serverless, or not to serverless
If moving database technology has been discounted, then your next consideration is whether a serverless database is the right choice for your application.

Spend some time to understand your database workloads, usage and access patterns. If you have a consistent access pattern with fairly predictable traffic volumes that do not alter much, then Aurora serverless may not be the best solution. In this case, a provisioned RDS instance running on a suitably sized DB instance class will likely prove to be more cost effective.

If your workload is not predictable, especially if you have a low baseline of traffic with regular but unpredictable spikes of activity, then Aurora serverless may be a better fit. It will be more cost effective as it will tick over with just enough resource for your baseline traffic, then be able to quickly scale up to match spikes of traffic.

## Aurora V2 main considerations
The two main considerations for setting up an Aurora instance is the availability, and the allowed resources.

### Availability
Do you need high availability? If your app is not business critical, then you may be ok with a single writer instance. For business critical applications, it makes more sense to have a multi AZ instance. This is achieved by having a **reader instance** in addition to the writer instance. The reader instance will be in a different AZ to the writer.

With a reader instance, Aurora can promote the reader instance within one minute. This provides the shortest possible downtime, and zero downtime in some cases. The following are examples of downtime that can be mitigated by running a reader instance:
- AZ containing the writer instance goes offline
- Writer instance out of memory crash and restart
- Writer instance maintenance window (e.g. for auto minor version upgrades)

A reader instance also provides the ability to distribute your workload more effectively, allowing your writer instance to handle the transactions while the reader takes care of read only queries.

It's beyond the scope of this document, but you may also consider RDS proxy, especially if your database gets traffic from lambda functions as it can help prevent swamping the connections to the DB.

> Note: your data is stored in multiple availability zones (AZ's) in a single region by default so is considered highly available. However you won't be able to access your data if you run a single writer instance which is currently down for some reason.
#### Downtime without a reader instance
If your writer instance restarts, you will get downtime. With a reader instance, this downtime can be minimised to seconds because the reader instance is promoted to take the place of the lost writer instance. Sometimes downtime with a reader instance is avoided all together, for example in scheduled maintenance.

If there's no reader instance, then downtime increases with database size. For even a small databases (just a few MB in size), it can require 10 minutes to restart. This restart time will increase with the size of the cluster.

### Resources
Aurora Serverless uses a unit of measure called the `ACU` or Aurora Capacity Units. An ACU is a combined unit of CPU, network and memory. One ACU is defined by AWS as being "roughly 2 GB of memory, and equivalent CPU and network bandwidth".

Beware of a really low minimum ACU, even if you have a low baseline workload. While your cluster may be able to service all it's normal traffic at just 0.5 of an ACU, this can cause problems when the cluster needs to scale. **Aurora scales faster if it's current capacity is higher.** If you have an instance running at 0.5 ACU and it receives a large spike in traffic, then those clusters could fail to scale fast enough so they run out of memory (or connections) and restart.

For production use, you should probably not have a minimum ACU below 2. With a single writer instance (i.e. no reader instance), you probably want more than that. This is because the ACU's are applied to each instance in the cluster. So if you have a minimum ACU of 2, then the writer and reader will each have 2 ACU's, providing an overall cluster capacity of 4 ACU's.

## What about aurora V1
**Aurora V1 should probably not be considered for production use** (unless you are already running it).

The main benefit of using Aurora V2 is for auto scaling. Autoscaling in V1 is much slower and can potentially cause a DB crash and restart.

When it decides it needs to scale out, Aurora V1 has to find a scaling point. A scaling point is a quiet point in the database where it can make the required changes without interrupting any running transactions etc. Sometimes it can take a few minutes to find this scaling point. If Aurora V1 cannot find a scaling point in sufficient time, the DB will restart.

With Aurora V2, this scaling bottleneck does not exist, and Aurora can scale much more quickly.

## Summary
Before you upgrade your MySQL 5.7 instance, consider if MySQL is still the most appropriate technology to use

If MySQL is still a good choice for you, is an Aurora serverless V2 version a good choice, or would you be better off with a provisioned RDS instance instead.

If you do choose Aurora serverless V2, then do you need to have a reader instance in the cluster, or can you run with a single writer instance? What are the consequences of setting the minimum ACU's low?
