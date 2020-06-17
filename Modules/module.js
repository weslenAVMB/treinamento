var Counter = (function(){
    var count = parseInt(document.getElementById("qtd-estoque").value);
  
    return {
        count: function() {
          return count;
        }
        
      , addOne: function() {
            count += 1;  
            return document.getElementById("qtd-estoque").value = count
       
        },

        removeOne: function(){
            count -= 1;
            return document.getElementById("qtd-estoque").value = count
        },

        addProduct: function(qtd){
            return count + qtd;
        }
    };
  })();


  //Botões
  const btnAdd = document.getElementById("btn-add")
  const btnRemove = document.getElementById("btn-remove")
  
  //Inputs
  var qtdEstoque = document.getElementById("qtd-estoque")

  //Listeners
  btnAdd.addEventListener("click", Counter.addOne)
  btnRemove.addEventListener("click", Counter.removeOne);
  