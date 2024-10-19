## Installing the correct version of Node
The correct version of node to install is located in the .nvmrc file. Open the file and run the following command replacing `<version>` with the version found in .nvmrc.

```
nvm install <version>
```

Once that has completed, all you need to do to switch to the right version of node is navigate to the directory of this project and run the following command.

```
nvm use
```