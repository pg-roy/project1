// $(function() {
//     load();
//     $("#title").on("keyup",function(e) {
//         if($(this).val().trim() == "") {
//             return false;
//         } else {
//             //当按下enter键时
//             if(e.keyCode == 13) {
//                 var local = getData();
//                 // local.push({title:$(this).val(),done:false});
//                 local.push({title:$(this).val(),done:false});
//                 saveData(local);
//                 load();
//                 $(this).val("");
//             }
//         }
//     });
//     //获得数据
//     function getData() {
//         var data = localStorage.getItem("todolist");
//         if(data == null) {
//             return [];
//         } else {
//             return JSON.parse(data);
//         }
//     }
//     //保存数据
//     function saveData(data) {
//         localStorage.setItem("todolist",JSON.stringify(data));
//     }
//     //删除操作
//     $("ol, ul").on("click","a",function() {
//         //先获取数据
//         var data = getData();
//         //修改数据
//         var index = $(this).attr("index");
//         // console.log(index);
//         //删除data中第index个数据（对象，li标签）
//         data.splice(index,1);
//         //再把数据存进去
//         saveData(data);
//         load();
//     });
//     //点击复选框修改done数据
//     $("ul, ol").on("click","input",function() {
//         var data = getData();
//         //index保存当前点击的input框的索引号
//         var index = $(this).siblings("a").attr("index");
//         //修改data数组的第index项（对象）done的值为我们点击修改后的值
//         data[index].done = $(this).prop("checked");
//         //保存到本地并重新渲染页面
//         //解决点击li排队
//         /* var change = data[index];
//         data.splice(index,1);
//         data.push(change); */
//         saveData(data);
//         load();
//     });
//     //渲染页面，调用load函数
//     function load() {
//         $("ol").empty();
//         $("ul").empty();
//         // var countlist = 0;
//         // var countdone = 0;
//         var data = getData();
//         $.each(data,function(i,ele) {
//             if(ele.done) {
//                 $("ul").prepend(`<li><input type="checkbox" checked = "checked"><p>${ele.title}</p><a href="javascript:;" index = "${i}"></a></li>`);
//                 // countdone ++;
//             } else {
//                 $("ol").prepend(`<li><input type="checkbox"><p>${ele.title}</p><a href="javascript:;" index = "${i}"></a></li>`);
//                 // countlist ++;
//             }
//         });
//         $("#todocount").text($("ol li").length); //未完成的个数和ol里面的li长度保持一致
//         $("#donecount").text($("ul li").length);//已完成的个数和ul里面的li长度保持一致
//         // $("#todocount").text(countlist);
//         // $("#donecount").text(countdone);
//     }
// })

/* $(function () {
    //1.在输入框按下enter，把数据放入未完成事项ol中
    //当按下enter时，判断是否为空，不为空时操作数据
    load();
    $("#title").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if ($(this).val().trim() == "") {
                return false;
            } else {
                var local = getData();
                local.push({
                    title: $(this).val(),
                    done: false
                });
                saveData(local);
                load();
            }
        }
    });
    //获取数据
    function getData() {
        var data = localStorage.getItem("todolist");
        console.log(data);
        
        if (data == null) {
            return [];
        } else {
            return JSON.parse(data);
        }
    }
    //保存数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    //删除数据
    $("ul,ol").on("click","a",function() {
        var data = getData();
        var index = $(this).attr("index");
        data.splice(index,1);
        saveData(data);
        load();
    });
    //点击复选修改
    $("ol,ul").on("click","input",function() {
        var data = getData();
        var index = $(this).siblings("a").attr("index");
        // console.log(index);
        console.log( data[index].done);
        console.log($(this).prop("checked"));
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    })
    //渲染数据
    //遍历data数据，拿到每一个data内的每一个对象
    function load() {
        $("ol,ul").empty();
        var data = getData();
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].done);
            if (data[i].done) {
              $("ul").prepend(`<li><input type="checkbox" checked = "checked"><p>${data[i].title}</p><a href="javaScript:;" index = "${i}"></a></li>`);
            } else {
                $("ol").prepend(`<li><input type="checkbox"><p>${data[i].title}</p><a href="javaScript:;" index = "${i}"></a></li>`);
            }
        }
        $("#donecount").text($("ul li").length);
        $("#todocount").text($("ol li").length);
    }

}) */

$(function () {
    $("#title").keyup(function (e) {
        if (e.keyCode == 13) {
            if ($(this).val().trim() == '') {
                return false;
            } else {
                var data = get();
                data.push({
                    title: $(this).val(),
                    done: false
                });
                save(data);
                load();
                $(this).val('');
            }
        }
    });

    function get() {
        var data = JSON.parse(localStorage.getItem("todo"));
        if (data == null) {
            return [];
        } else {
            return data;
        }
    }

    function save(data) {
        localStorage.setItem("todo", JSON.stringify(data));
    }
    load();
    $("ol,ul").on("click", "input", function () {
        var data = get();
        var index = $(this).siblings("a").attr("index");
        data[index].done = $(this).prop("checked");
        save(data);
        load();
    });
    $("ol,ul").on("click", "a", function () {
        var data = get();
        var index = $(this).attr("index");
        data.splice(index, 1);
        save(data);
        load();
    });

    function load() {
        $("ul,ol").empty();
        var data = get();
        $.each(data, function (i, el) {
            if (el.done) {
                $("ul").prepend(`
                            <li>
                               <input type="checkbox" name="" id="" checked = "checked">
                               <p>${el.title}</p>
                               <a href="javascript:;" index="${i}"></a>
                            </li>
                `);
            } else {
                $("ol").prepend(`
                            <li>
                               <input type="checkbox" name="" id="">
                               <p>${el.title}</p>
                               <a href="javascript:;" index="${i}"></a>
                            </li>
                `);
            }
        });
        $("#donecount").text($("ul li").length);
        $("#todocount").text($("ol li").length);
    }

})