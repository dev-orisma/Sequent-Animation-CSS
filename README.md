# Sequent-Animation-CSS

DOM element Example

```HTML
<div class='sani first begin' sani-data="scroll:0,after:null,from_class:begin,to_class:end,delay:500">
    test1
</div>
<div class='sani' id='second' sani-data="scroll:0,after:.first,from_class:begin,to_class:end,delay:500">
    test2
</div>
<div class='sani' id='s3' sani-data="scroll:0,after:#second,from_class:begin,to_class:end,delay:100">
    test3
</div>
```

```TEXT
sani-data : Animation Properties

scroll :
  Type: [Int]
  Animation will active after page scroll position

after :
  Type: [String] / null
  * DOM Element "ID" or "Class name" *
  Animation will active after reference DOM element active
  
from_class :
  Type: [String]
  * CSS Class name with no transition attribute begin position *
  Start CSS Class

to_class :
  Type: [String]
  * CSS Class name with transition attribute end position *
  Element will transition CSS Class to this class
  
delay :
  Type: [Int] (millisacound)
  Animation will active delay after previous sequent Element active
```
