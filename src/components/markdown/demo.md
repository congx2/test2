
# Markdown 基本语法

> John Gruber 的 Markdown 设计文档中列出的所有 Markdown 元素。


## 总览

几乎所有 Markdown 应用程序都支持 John Gruber 原始设计文档中列出的 Markdown 基本语法。但是，Markdown 处理程序之间存在着细微的变化和差异，我们都会尽可能标记出来。


## 标题

要创建标题，请在单词或短语前面添加井号 (#) 。井号的数量代表了标题的级别。例如，添加三个井号即创建一个三级标题 (<h3>) (例如：### My Header)。

### 可选语法
还可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题。


### 标题（Heading）用法的最佳实践
当井号（#）和标题文本之间没有空格时，各 Markdown 应用程序的处理方式是不一样的。为了兼容考虑，请在井号和标题文本之间添加一个空格。


## 段落（Paragraphs）
要创建段落，请使用空白行将一行或多行文本进行分隔。

### 段落（Paragraph）用法的最佳实践
除非 段落在列表中，否则不要用空格（spaces）或制表符（ tabs）缩进段落。


## 换行（Line Breaks）
在一行的末尾添加两个或多个空格，然后按回车键（return），即可创建一个换行（line break） (<br>)。

### 换行（Line Break）用法的最佳实践
几乎每个 Markdown 应用程序都支持两个或多个空格进行换行 (称为 “结尾空格（trailing whitespace）”) 的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能需要使用除结尾空格以外的其它方式来进行换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 <br> 标签。

为了兼容性，请在行尾添加“结尾空格”或 HTML 的 <br> 标签来实现换行。

还有两种其他方式我并不推荐使用。CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (\) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。并且至少有两种轻量级标记语言支持无须在行尾添加任何内容，只须键入回车键（ return）即可实现换行。


## 强调（Emphasis）
通过将文本设置为粗体或斜体来强调其重要性。


## 粗体（Bold）
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

### 粗体（Bold）用法最佳实践
Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。

## 斜体（Italic）
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

### 斜体（Italic）用法的最佳实践
Markdown 的众多应用程序在如何处理单词中间的下划线上意见不一致。为了兼容起见，请用星号标注单词中间的斜体来表示着重。


## 粗体（Bold）和斜体（Italic）
要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

### 粗体（Bold）和斜体（Italic）用法的最佳实践
Markdown 应用程序在处理单词或短语中间添加的下划线上并不一致。为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。

## 块引用（Blockquotes）
要创建块引用，请在段落前添加一个 > 符号。

### 多个段落的块引用（Blockquotes）
块引用可以包含多个段落。为段落之间的空白行各添加一个 > 符号。

### 嵌套块引用（Nested Blockquotes）
块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号。

### 带有其它元素的块引用（Blockquotes with Other Elements）
块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。

## 列表（Lists）
你可以将多个条目组织成有序或无序列表。

### 有序列表（Ordered Lists）
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

#### 有序列表（Ordered List）用法的最佳实践
CommonMark 和其它几种轻量级标记语言可以让你使用括号（)）作为分隔符（例如 1) First item），但并非所有的 Markdown 应用程序都支持此种用法，因此，从兼容的角度来看，此用法不推荐。为了兼容起见，请只使用英文句点作为分隔符。

### 无序列表（Unordered Lists）
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

#### 以数字开头的无序列表项
如果你需要以数字开头并且紧跟一个英文句号（也就是 .）的无序列表项，则可以使使用反斜线（\）来 转义 这个英文句号。

#### 无序列表（Unordered List）用法的最佳实践
Markdown 应用程序在如何处理同一列表中混用不同分隔符上并不一致。为了兼容起见，请不要在同一个列表中混用不同的分隔符，最好选定一种分隔符并一直用下去。

### 在列表中添加列表项
要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符，如下例所示：


## 代码
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。

```js
const sum = (a, b) => {
  return a + b
}
const a = 1
const b = 2
const c = sum(a, b)
```

## 转义反引号
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中。

``Use `code` in your Markdown file.``

## 分隔线（Horizontal Rules）
要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。

### 分隔线（Horizontal Rule）用法最佳实践
为了兼容性，请在分隔线的前后均添加空白行。


## 链接（Links）
要创建链接，请将链接文本括在方括号（例如 [Duck Duck Go]）中，后面紧跟着括在圆括号中的 URL（例如 (https://duckduckgo.com) ）。

[百度](https://baidu.com/)


### 添加标题
你可以选择为链接添加标题（即 title 属性）。当用户将鼠标悬停在链接上时，将显示一个提示。要添加标题，请将其放在 URL 后面。

[百度](https://baidu.com/ "baidu")

### 网址和电子邮件地址

<https://www.markdownguide.org>
<fake@example.com>

### 格式化链接

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

### 链接（Link）的最佳使用实践

不同的 Markdown 应用程序在处理 URL 中间的空格方面是不一样的。为了兼容起见，请尽量使用 %20 （空格的编码形式）来代替空格。

## 图片（Images）
要添加图片，首先请添加感叹号（!），然后紧跟着是方括号，方括号中可添加替代文本（alt text，即图片显示失败后显示此文本），最后跟着圆括号，圆括号中添加图片资源的路径或 URL。你可以选择在圆括号中的 URL 之后添加标题（即 title 属性）。

![Philadelphia's Magic Gardens. This place was so cool!](/assets/images/philly-magic-gardens.jpg "Philadelphia's Magic Gardens")

### 带链接的图片

[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)


## 转义字符（Escaping Characters）

\* 如果没有开头的反斜杠字符的话，这一行将显示为无序列表。

## HTML 标签
大多 Markdown 应用程序允许你在 Markdown 格式文本中添加 HTML 标签。如果你喜欢某些 HTML 标签胜于 Markdown 语法的话，这将何有帮助。例如，某些人发现通过 HTML 标签添加图像更加容易。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

如需使用 HTML，请将 HTML 标签添加到 Markdown 格式文本中即可。

This **word** is bold. This <em>word</em> is italic.

### HTML 用法最佳实践
出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML。如有疑问，请查看 Markdown 应用程序的文档。某些应用程序只支持 HTML 标签的子集。

对于 HTML 的块级元素 <div>、<table>、<pre> 和 <p>，请在其前后使用空行（blank lines）与其它内容进行分隔。尽量不要使用制表符（tabs）或空格（spaces）对 HTML 标签做缩进，否则将影响格式。

在 HTML 块级标签内不能使用 Markdown 语法。例如 <p>italic and **bold**</p> 将不起作用。


## 表格

| 列1 | 列2 | 列3 |
| :--- | :---: | ---: |
| left | center | right |
| left | center | right |

