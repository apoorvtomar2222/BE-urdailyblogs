function dataTosave() {
            console.log("ckeditor data", $('.cke_editable'));
            console.log($("#articleNewData"), "This is my article");
            console.log("Data is ", CKEDITOR.instances.editor1.getData());
            console.log("id",$('#ID').val());
            console.log("id",$('#headerImage').val());
            console.log("id",$('#authorPicture').val());
            console.log("id",$('#category').val());
            var data={
                id:$('#ID').val(),
                headerImage:$$('#headerImage').val(),
                authorPicture:$('#authorPicture').val(),
                category:$('#category').val()
            }
            $("button").click(function(){
                $.post("http://localhost:3000/articles/save/newarticle",
                data,function(data,status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
            });
            

        }
