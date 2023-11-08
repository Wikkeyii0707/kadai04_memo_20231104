
//1.Save クリックイベント
$("#save").on("click",function(){

// var keyCat=$("#category").val();

//     for(let i=0;i<localStorage.length;i++){
//         const key=localStorage.key(i);
        
//         if($("#category").val()+ i != key){
//             keyCat = $("#category").val()+ i;
//             break;
//         }
//         // const value=localStorage.getItem(key);
//     }
    


// const key = $("#category").val();

const key = Date();

const value=[$("#category").val(),$("#title1").val(),$("#title2").val()];
const serializedArray = JSON.stringify(value);
localStorage.setItem(key,serializedArray);
var moji = "btniID"
var tmp = document.getElementsByClassName("btnd") ;

const html = `
<tbody>

    <tr>
    
        <td>${value[0]}</td>
        <td>${value[1]}</td>
        <td><a href= "${value[2]}" target="_blank" class="btn btn--orange btn--radius">リンク</a></td>
        <td><button class="btnd"  id=${key} >削除</button></td>
    </tr>

</tbody>
`;

$("#myTable").append(html);

$('#category').val("");
$('#title1').val("");
$('#title2').val("");

});

//2.clear クリックイベント

$("#clear").on("click",function(){
    localStorage.clear();
    $("#myTable").empty();

});




//3.ページ読み込み：保存データ取得表示
for(let i=0;i<localStorage.length;i++){
const key=localStorage.key(i);

// const value=localStorage.getItem(key);
const serializedArray = localStorage.getItem(key);
const value = JSON.parse(serializedArray);

// var moji = "btniID"
// var tmp = document.getElementsByClassName("btnd") ;
// tmp[i].setAttribute("id",moji+i);

console.log(value,"value");
const html = `
<tbody>
    <tr>
        <td>${value[0]}</td>
        <td>${value[1]}</td>
        <td><a href= "${value[2]}" target="_blank" class="btn btn--orange btn--radius">リンク</a></td>
        <td><button class="btnd" id=${key} >削除</button></td>
    </tr>
</tbody>
`;
$("#myTable").append(html);



}

document.getElementById('searchInput').addEventListener('keyup', function() {
    let searchValue = this.value.toLowerCase();
    let tableRows = document.getElementById('myTable').getElementsByTagName('tr');
    
    for (let i = 1; i < tableRows.length; i++) {
      let rowText = tableRows[i].textContent.toLowerCase();
      if (rowText.indexOf(searchValue) > -1) {
        tableRows[i].style.display = '';
      } else {
        tableRows[i].style.display = 'none';
      }
    }
  });


  $('th').click(function(){

    // 情報取得
    let ele = $(this).attr('id');
    let sortFlg = $(this).data('sort');
  
    // リセット
    $('th').data('sort', "");
  
    // ソート順序
    if(sortFlg == "" || sortFlg == "desc"){
      sortFlg = "asc";
      $(this).data('sort', "asc");
    }else{
      sortFlg = "desc";
      $(this).data('sort', "desc");
    }
  
    // テーブルソート処理
    sortTable(ele, sortFlg);
  });

  function sortTable(ele, sortFlg){
    let arr = $('Table tbody tr').sort(function(a, b){
      // ソート対象が数値の場合
      if($.isNumeric($(a).find('td').eq(ele).text())){
        let aNum = Number($(a).find('td').eq(ele).text());
        let bNum = Number($(b).find('td').eq(ele).text());
  
        if(sortFlg == "asc"){
          return aNum - bNum;
        }else{
          return bNum - aNum;
        }
      }else{ // ソート対象が数値でない場合
        let sortNum = 1;
  
        // 比較時は小文字に統一
        if($(a).find('td').eq(ele).text().toLowerCase() > $(b).find('td').eq(ele).text().toLowerCase()){
          sortNum = 1;
        }else{
          sortNum = -1;
        }
        if(sortFlg == "desc"){
          sortNum *= (-1);
        }
  
        return sortNum;
      }
    });
    $('Table tbody').html(arr);
  }

//   $("#btnDelete").on("click",function(){
//     // const key = $("#category").val();
//     // const value=[$("#title1").val(),$("#title2").val()];
//     // const serializedArray = JSON.stringify(value);
//     // localStorage.clear(key,serializedArray);


//     for(let i=0;i<localStorage.length;i++){
//         const key=localStorage.key(i);
        
//         if($("#category").val()+ i != key){
//             keyCat = $("#category").val()+ i;
//             break;
//         }
//         // const value=localStorage.getItem(key);
//     }
//     localStorage.removeItem(keyCat)
// //   $("#btnDelete").on("click",function(){
// //     localStorage.clear();
// //     $("#myTable").empty();

//     });

var button = document.getElementsByClassName('btnd');
console.log(button,"button");
for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var key = this.getAttribute('data-key');
    localStorage.removeItem(key);
    this.classList.localStorage.removeItem();

    var sample_id = this.getAttribute('id');
    console.log(sample_id);

  });
}

