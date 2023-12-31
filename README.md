# terasky-discover-aws-resources
A command-line tool to discover your aws services and resources across all regions
Please make sure torun aws config or [set env. vars](https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_credentials_environment.html) with a user dredentials that have read premissions to all resources

### How to use the tool ###
1. Download the [relevant binary](https://github.com/IlanTeraSky/terasky-discover-aws-resources/releases) for your machine.
2. For Linux and MAC users, make the file executable by running this command:
```
chmod +x terasky-discover-aws-resources-<env>
```
3. For MAC, if the tool won't open via terminal, double click it on Finder and choose "open", then run as usual.
4. Run the executable and watch the output or write to file.

### Currently supported services: ###
1. EC2 - Describe Instances
2. S3 - List Buckets
3. VPC - Describe VPCs
4. Lambda - List Functions
5. API Gateway - Get REST APIs
6. AppConfig - List Applications
7. Athena - List Data Catalogs
8. Backup - List Backup Plans
9. CloudFormation - List StackSets
10. CloudFront - List Distributions

