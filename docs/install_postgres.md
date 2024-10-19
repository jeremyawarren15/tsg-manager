## Installing Postgres

This guide assumes that you are running Ubuntu or another Debian flavored distro like Pop!\_OS. You can also follow this guide on WSL using Windows machines.

Make sure that your packages are up to date

```
sudo apt install postgresql
```

Add the postgres apt repository key

```
sudo apt install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

Then add the repository

```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

Install postgres 16

```
sudo apt update
sudo apt install postgresql-16
```