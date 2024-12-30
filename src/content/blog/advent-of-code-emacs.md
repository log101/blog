---
draft: false
title: AoC was a Great Opportunity to Learn Emacs
summary: Tackling AoC with Emacs Lisp.
category: teknik
subcategory: Emacs
date: 2024-12-30
---

<style>

.astro-code {
    font-size: 16px;
    line-height: 1rem;
    padding: 18px;
    border-radius: 8px;
}

h3, hr {
    margin: 0.7em 0 0.5em 0
}

#full-text p {
    margin: 0.5em 0 1.2em 0;
}

figcaption {
    color: gray;
    margin-top: -0.8em;
    text-align: center;
    font-size: 0.9em;
}

#toc > ul {
    line-height: 2em;
}

li a {
    color: black;
}

table {
    border: 1px solid slategrey;
    padding: 4px;
    background-color: #f8f9fa;
    margin: 0.5em 0 1.2em 0;
}

th {
    text-align: left;
    white-space: nowrap;
}

td {
    text-align: left;
    white-space: nowrap;
}

</style>

### Introduction

Learning Emacs has always been a challenge. It is written in an unfamiliar language for the majority of developers, and most of the time there is more than one way to accomplish even simple tasks. While [the manual](https://www.gnu.org/software/emacs/manual/) covers all you need to get up and running, only practice can make it stick!

Last November, while exploring the manual, I realized December was approaching, bringing [Advent of Code](https://adventofcode.com/) with it. As it’s a tradition to tackle AoC challenges in obscure languages and environments, I thought Emacs Lisp would be a perfect candidate. After all, Emacs is primarily a text processor (among many other things), and AoC problems are all text-based.

In this blog post, we'll explore three topics that I found AoC helps us understand better about Emacs.

<div id="toc">
<h3 id="contents">Contents</h3>
<ul>
<li><a href="#integrated-help">Integrated Help</a></li>
<li><a href="#buffers">Buffers</a></li>
<li><a href="#lisp">Lisp</a></li>
<li><a href="#summary">Summary</a></li>
</ul>
</div>

### Integrated Help

Starting from the first day, two fundamental Emacs functions quickly became my best friends: `describe-function (C-h f)` and `(describe-variable) C-h v`. Emacs has been around for a very long time compared to other software projects, so it has accumulated many functions that seem similar but behave subtly differently. Take the difference between `forward-line` and `next-logical-line` for example, I still forget the difference! Thankfully I can just move my cursor over and enter `C-h f`.While I used variable help (`C-h v`) less, it was helpful for checking global variables’ values.

Reaching out to helper functions when in need is an important habit to develop. Make sure you use them.

### Buffers

When solving grid-based problems, I took advantage of Emacs buffers instead of converting text into matrices. Since buffers consist of lines and columns, you can use regular and natural horizontal and vertical movement functions rather than using mathematical matrix operations. The Guard Problem (day 6) is a great example:

```lisp
;; Check end of line and move one
;; point further
(defun move-east ()
  (if (not (eolp))
      (goto-char (+ (point) 1))
    (throw 'end t)))
```

![Guardian's Path](../../images/elisp-maze.png)

<figure class="text-xs text-gray-500 mt-0 p-0" style="text-align: center; margin-top: -25px">Guard is moving around the maze.</figure>


### Lisp

Emacs is written in C and a special dialect of Lisp called Emacs Lisp, which is also the language used to configure Emacs. Thanks to AoC I was able to try the structures and concepts I’ve learned in [An Introduction to Programming with Emacs Lisp](https://www.gnu.org/software/emacs/manual/eintr.html) and [the reference manual](https://www.gnu.org/software/emacs/manual/elisp.html). Check out this little example:

```lisp
(setq antenna-regexp "[[:alnum:]]")

(defun extract-antennas (buf)
  (let ((antennas (make-hash-table)))
    (with-current-buffer buf
      (goto-char (point-min))
      (defun extract-antennas-inner ()
	(while (re-search-forward antenna-regexp nil t)
	  (let* ((matched-char (string-to-char (match-string 0)))
		 (matched-position (list (line-number-at-pos) (- (current-column) 1)))
		 (val (gethash matched-char antennas)))
	    (puthash matched-char (cons matched-position val) antennas)))
	antennas)
      (extract-antennas-inner))))
```

Writing this code was only possible on day 8. It looks simple, but writing this little function involves understanding and combining these concepts:
- Functions
- Closures
- Scoped variables
- Buffers
- Regexp Search
- Hash Tables

### Summary

Thank you for reading my humble blog post. If you’re looking for a way to explore unfamiliar capabilities of Emacs, I’d advise you to try AoC with Emacs Lisp next year. I was only to participate for the first 7 days, but I’m hoping to get 25/25 next year, we’ll see how it goes. I’d love to hear your thoughts, thanks again for reading!
