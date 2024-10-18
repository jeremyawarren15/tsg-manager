# tsg-manager

# Setup

## Installing NVM
NVM (Node Version Manager) is used to manage the particular node version on your system. Normally, you would install each version and remove it if you needed to change the version you are using. NVM allows you to quickly switch the version you are using at will.

The following command will install NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Now that it is installed, you will want to add this command anywhere in your .bashrc file. This will load nvm when you open a new terminal.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

After you have saved this change to your .bashrc you will want to open a new terminal.

## Installing the correct version of Node
The correct version of node to install is located in the .nvmrc file. Open the file and run the following command replacing `<version>` with the version found in .nvmrc.

```
nvm install <version>
```

Once that has completed, all you need to do to switch to the right version of node is navigate to the directory of this project and run the following command.

```
nvm use
```