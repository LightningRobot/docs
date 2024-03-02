# Get started quickly
::: warning
The framework is currently under development, please use it with caution!
:::

## Introduction to the article
This section will show you how to create your bot using a lightning bot. The project runs on lightning scaffolding and allows the installation of plugins from the store.

## Environment preparation
### Install Python
This robot framework is based on Python 3.13+, please make sure your system has Python 3.13+ installed. If you haven't already, follow the instructions below to install it.
#### Install Python on Windows
1. Click [here](https://www.python.org/downloads/release/python-3130a4/) to access the Python download page.
2. Select the appropriate version according to your system type and download it. If you're not sure if it's x86 or x64, choose the x86 version. If you already have Python 3.13+ installed on your system, you don't need to install it.
3. Once downloaded, double-click to open the downloaded program and click Next.
4. Tick the "Add Python to PATH" option.
5. Click the "Install Now" button and wait for the installation to complete.
6. Restart your computer. At this point, your Python has been successfully installed.

### Install the scaffolding
1. Click [here](https://github.com/LightningRobot/cli/releases) to download the latest version of scaffolding.
In the subsequent process, run the command in the directory where the downloaded file was downloaded, and in Windowds, replace **lrcli** with **lrcli.exe**.

2. Run the following command to check the version number
```bash
lrcli version
```
Normally, he should return:
```bash
v0.1.6
```
## Create a project
Go to your working directory (#) and run the following command to create a bot project:
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
test3
[Ask] which adapter to use
console
WARNING: pip is being invoked by an old script wrapper. This will fail in a future version of pip.
Please see https://github.com/pypa/pip/issues/5599 for advice on fixing the underlying issue.
To avoid this problem you can invoke Python with '-m pip' instead of running pip directly.
[INFO] successfully installed the adapter pack lighteningrobot-adapter-console! (Source: PyPI)
[INFO] created successfully!
```
## Run the bot
In the working directory where the command was executed, run the command:
```bash
lrcli runbot
```
to run the bot.