# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
2. SSH username
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username
6. Database password
7. Database name (basically the name that contains all your tables)
8. Instructions on how to use the above information.

Credentials:

Account email: agothi@sfsu.edu

Region: us-west-1b

EC2:

url:- 3.101.225.46:3000
Platform: ubuntu
Platform details: Linux/UNIX
Instance type: t2.micro{
Family: t2
1 vCPU
1 GiB Memory
Free tier eligible
}
Volume: 8 GiB, EBS, General Purpose SSD (gp2)
SSH link: ssh -i "tutoringsite.pem" ubuntu@ec2-3-101-225-46.us-west-1.compute.amazonaws.com

RDBMS:

Hostname: se-tutoringsite.cmacnvx5bdls.us-west-1.rds.amazonaws.com
Port: 3306
username: admin
Class: db.t2.micro
Engine: MySQL Community
DB name: se-tutoringsite
Storage: 20GiB
Engine version: 8.0.33

Steps to connect AWS EC2 instance from local machine:
1. Open terminal/cmd in your local machine
2. Go to the folder where tutoring.pem file is located
3. Enter the SSH link into terminal/cmd.
4. Then after you will access the aws ec2 ubuntu terminal.

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
