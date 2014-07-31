## 综述

Checkbox是对原生的checkbox单选框美化组件

## Demo

[http://kg.kissyui.com/checkbox/2.0.0/demo/index.html](http://kg.kissyui.com/checkbox/1.0/demo/index.html)


## 快速使用
对于下面面的html结构

```
	<div id="J_Content" class="control-group">
        <div class="controls">
            <label class="radio inline">
                <input type="checkbox" name="ch-1" value="ch1"/>1111
            </label>
            <label class="radio inline">
                <input  type="checkbox" name="ch-2" value="ch1"/>2222
            </label>
            <label class="radio inline">
                <input disabled="disabled"  type="checkbox" name="ch-3" value="ch1"/>3333
            </label>
            <label class="radio inline">
                <input disabled="disabled"  type="checkbox" name="ch-4" value="ch1"/>4444
            </label>
            <label class="radio inline">
                <input  type="checkbox" name="ch-5" value="ch1"/>5555
            </label>
            <label class="radio inline">
                <input  type="checkbox" name="ch-6" value="ch1"/>6666
            </label>
            <label class="radio inline">
                <input  type="checkbox" name="ch-7" value="ch1"/>7777
            </label>
            <label class="radio inline">
                <input  type="checkbox" checked="checked" name="ch-8" value="ch1"/>8888
            </label>
            <label class="radio inline">
                <input  type="checkbox" checked="checked" name="ch-9" value="ch1"/>9999
            </label>
        </div>
    </div>
```

### 初始化组件

	

    S.use('kg/checkbox/2.0.0/index', function (S, Checkbox) {
         //初始化
		var r = new Checkbox('#J_Content input',{
		    hasLabel:true, //是否需要label-for，默认是false
		    accessible:true//是否需要无障碍，默认为false
		})
		//执行
		r.render();
    })
需要注意的是，组件里与checkbox对应的label默认是通过dom.next()获取的，如果获取不到，需要传递getLabelFunc来获取label的位置
## API说明

checkbox 继承于radio组件，api基本类似

* 全选/反选
	selectAll和resetAll
* 根据index禁用checkbox
	//禁用
	r.setDisabled(index);
	//恢复
	r.setDisabled(index);

* 获取所有选中的checkbox的索引
	//返回数字数组
	r.getAllChecked();
* 还原成为原生的checkbox
	//还原成为原生的checkbox
	r.recoverKfbtn();
