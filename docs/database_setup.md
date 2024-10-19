## Setting up Postgres

Start the postgres service.

> [!IMPORTANT]
> This will need to be run every time you restart your computer unless you set it up to run this service at startup

```
sudo service postgresql start
```

Switch to the default postgres user. This allows you to be able to configure the database.

```
sudo -i -u postgres
```

Open the PostgreSQL interactive terminal

```
psql
```

Now change the default password for the postgres user. You are going to want to keep track of this password. It will be useful in later steps.

```
ALTER USER postgres WITH PASSWORD 'enter_password_here';
```

Now you need to grant all of the appropriate permissions for the default user.

```
GRANT ALL PRIVILEGES ON DATABASE tsg68 TO postgres;
```

Now exit the postgres interactive terminal

```
\q
```

Exit the postgres user and return to your default user account.

```
exit
```