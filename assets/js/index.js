$("#add_product").submit(function(event){
    alert ("data Inserted!");
})
$("#edit_product").submit(function(event){
    event.preventDefault();
    var unindex_array = $(this).serializeArray();
    var data = {}
    $.map(unindex_array,function(n,i){
        data[n['name']] = n['value']
    })
    var request = {
        "url": `http://localhost:3005/api/product/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function(response){
        alert("Update Successfully");
    })
})
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
        "url": `http://localhost:3005/api/product/${id}`,
        "method": "DELETE",
        }
        if(confirm("Process to delete this product")){
            $.ajax(request).done(function(response){
                alert("Delete Successfully");
                location.reload()
            })
        }
    })
}