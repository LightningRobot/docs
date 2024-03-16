# Install the bot
::: warning
The framework is currently under development, please use it with caution! Python in this article stands for CPython in the absence of indications.
:::
This section will show you how to create your bot using a lightning bot. The project runs on lightning scaffolding and allows the installation of plugins from the store.

## Environment preparation
### Install Python
This robot framework is based on Python 3+, please make sure your system has Python 3+ installed. If you haven't already, follow the instructions below to install it.
#### Install Python on Windows
1. Click here (https://www.python.org/downloads/release/python-3130a4/) to access the Python download page.
2. Select the appropriate version according to your system type and download it. If you're not sure if it's x86 or x64, choose the x86 version.
3. Once downloaded, double-click to open the downloaded program and click Next.
4. Tick the "Add Python to PATH" option.
5. Click the "Install Now" button and wait for the installation to complete.
6. Restart your computer. At this point, your Python has been successfully installed.

### Install the scaffolding
1. Open Terminal and enter the following command to install the scaffolding:
```bash
pip install lightningrobot-cli
```
Then, run the following command to check the version number:
```bash
lrcli version
```
Normally, you should see:
```bash
v0.2.0
```
If not, reinstall or ask for help.
## Create a project
Go to your 'working directory' and run the following command to create a bot project:
```bash
lrcli create
```
Then, answer a few simple questions and your bot project is created.
Normally, the process should look like this:
```bash
lrcli create
      _      _       _     _         _             _____       _           _
     | |    (_)     | |   | |       (_)           |  __      | |         | |
     | |     _  __ _| |__ | |_ _ __  _ _ __   __ _| |__) |___ | |__   ___ | |_
     | |    | |/ _` | '_ | __| '_ | | '_  / _` |  _  // _ | '_  / _ | __|
     | |____| | (_| | | | | |_| | | | | | | | (_| | |   (_) | |_) | (_) | |_
     |______|_|__, |_| |_|__|_| |_|_|_| |_|__, |_|  ____/|_.__/ ___/ __|
            __/ |                         __/ |
           |___/                         |___/

⚡ Lightning Robot ⚡
[Inquiry] project name
mybot
[Ask] which adapter to use
console
[INFO] successfully installed the adapter pack lightningrobot-adapter-console! (Source: PyPI)
[INFO] created successfully!
```
## Run the bot
Run the following command in the working directory where you just executed the command:
```bash
pip install -r requirements.txt
python3 -m __init__
```
to launch your bot.