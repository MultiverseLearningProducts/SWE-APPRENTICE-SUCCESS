![Logo](../../../logo.jpg)
# The Command Line
- The command line allows programmers to quickly communicate necessary commands to a machine (e.g. "create this file for me").
- Knowing how to navigate and execute commands via the command line is an essential skill that is necessary as we develop as programmers.

## Key Commands when Using the Command Line
| Command | Action |
| ------- | ------ |
| `cd` | Change the directory |
| `ls` | List files contained inside the folder |
| `pwd` | Print Working Directory (or folder) |
| `mkdir` | Create a directory (folder) |
| `touch` | Create a file |
| `clear` | Clears the console |
| Up and Down arrow (on keyboard) | Goes back and forth in your command line history |

## Arguments
Like passing arguments to functions, you can pass arguments to commands on the command line. Here are a few basic ones:

| Command | Action |
| ------- | ------ |
| `.` | The current directory |
| `./something` | The something file/directory (in relation to where I am) |
| `..` | The parent directory to my current directory (one folder up) |
| `~` | The home directory |
| `/` | The root directory (usually different from `~`) |

## Command Line Example

Suppose we have the following file structure on our machine

```plaintext
home
├── myCoolFile.js
├── superSecretFolder
│   ├── learningToCode.js
│   ├── hiddenTreasure
│   │   ├── gold.js
│   │   ├── silver.html
│   │   └── bronze.css
│   └── commandLineInfo.txt
└── helpMePlease.css
```

Typing the command `ls` in the command line would output a list of the files and folders contained in the `home` directory (the current folder we are in). 

```bash
myUsername@myLaptopName home % ls
myCoolFile.js    superSecretFolder    helpMePlease.css
```

To move into the `superSecretFolder`, we can use the `cd` command followed by the name of the directory.

```bash
myUsername@myLaptopName home % cd superSecretFolder/
myUsername@myLaptopName superSecretFolder % ls
learningToCode.js    hiddenTreasure    commandLineInfo.txt
```

To create a new file in the folder, we use the `touch` command followed by the name of the file.

```bash
myUsername@myLaptopName superSecretFolder % touch myNewFile.js
myUsername@myLaptopName superSecretFolder % ls
learningToCode.js    hiddenTreasure    commandLineInfo.txt    myNewFile.js
```

If we wanted to move into the `hiddenTreasure` folder and then create a new folder inside `hiddenTreasure` we use the `mkdir` command.

```bash
myUsername@myLaptopName superSecretFolder % cd hiddenTreasure
myUsername@myLaptopName hiddenTreasure % mkdir mySubFolder
myUsername@myLaptopName hiddenTreasure % ls
gold.js    silver.html    bonze.css    mySubFolder
```

We can then move out of the folder by using the `cd` command again followed by `..`. We can then print the current file path using the `pwd` command.

```bash
myUsername@myLaptopName hiddenTreasure % cd ..
myUsername@myLaptopName superSecretFolder % pwd
home/superSecretFolder
```

## Try It Out! 💻 
1. Navigate to the [Command Line Hidden Treasure Repo](https://github.com/MultiverseLearningProducts/Command-Line-Hidden-Treasure).
2. Clone down the repo using the command `git clone URL_FROM_GITHUB`
3. Using the commands `pwd`, `ls`, and `cd`, navigate in and out of the folders to find all 6 `X.txt` files.
4. Use `pwd` to print the path to the files as you find them!

## #checkoutTheDocs 🔍
- **MDN**: [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

## Video Resources 🎥
- [Terminal Basics for Beginners](https://www.youtube.com/watch?v=5XgBd6rjuDQ)
- [Windows Command Line Tutorials](youtube.com/watch?v=MBBWVgE0ewk&list=PL6gx4Cwl9DGDV6SnbINlVUd0o2xT4JbMu)