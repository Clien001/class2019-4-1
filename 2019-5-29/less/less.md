# LESS 
> Less 是一门 CSS 预处理语言

> 写css更加方便(效率提高)，好维护，比较规范

> 属性变量
```
    @w:width;  定义
    @{w}:100px; 使用

```
> 传参
```
    定义:
        .变量名(@1:也可以定义默认值,@2){
            border:@x solid @c;
        }
    调用:
        .变量名(加实参);
```