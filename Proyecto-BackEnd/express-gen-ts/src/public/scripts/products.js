// **** Variables **** //

const DateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  const formatDate = (date) => DateFormatter.format(new Date(date));
  
  
  // **** Run **** //
  
  // Start
  displayProducts();
  
  /**
   * Call api
   */
  function displayProducts() {
    Http
      .get('/api/products/all')
      .then(resp => resp.json())
      .then(resp => {
        var allProductsTemplate = document.getElementById('all-products-template'),
          allProductsTemplateHtml = allProductsTemplate.innerHTML,
          template = Handlebars.compile(allProductsTemplateHtml);
        var allProductsAnchor = document.getElementById('all-products-anchor');
        allProductsAnchor.innerHTML = template({
          products: resp.products.map(product => ({
            ...product,
            createdFormatted: formatDate(product.created),
          })),
        });
      });
  }
  
  // Setup event listener for button click
  document.addEventListener('click', event => {
    event.preventDefault();
    var ele = event.target;
    if (ele.matches('#add-product-btn')) {
      addProduct();
    } else if (ele.matches('.edit-product-btn')) {
      showEditView(ele.parentNode.parentNode);
    } else if (ele.matches('.cancel-edit-btn')) {
      cancelEdit(ele.parentNode.parentNode);
    } else if (ele.matches('.submit-edit-btn')) {
      submitEdit(ele);
    } else if (ele.matches('.delete-product-btn')) {
      deleteProduct(ele);
    }
  }, false);
  
  /**
   * Add a new product.
   */
  function addProduct() {
    var nameInput = document.getElementById('name-input');
    var descriptionInput = document.getElementById('description-input');
    var data = {
      product: {
        id: -1,
        name: nameInput.value,
        description: descriptionInput.value,
        created: new Date(),
      },
    };
    // Call api
    Http
      .post('/api/products/add', data)
      .then(() => {
        nameInput.value = '';
        descriptionInput.value = '';
        displayProducts();
      });
  }
  
  /**
   * Show edit view.
   */
  function showEditView(productEle) {
    var normalView = productEle.getElementsByClassName('normal-view')[0];
    var editView = productEle.getElementsByClassName('edit-view')[0];
    normalView.style.display = 'none';
    editView.style.display = 'block';
  }
  
  /**
   * Cancel edit.
   */
  function cancelEdit(productEle) {
    var normalView = productEle.getElementsByClassName('normal-view')[0];
    var editView = productEle.getElementsByClassName('edit-view')[0];
    normalView.style.display = 'block';
    editView.style.display = 'none';
  }
  
  /**
   * Submit edit.
   */
  function submitEdit(ele) {
    var productEle = ele.parentNode.parentNode;
    var nameInput = productEle.getElementsByClassName('name-edit-input')[0];
    var descriptionInput = productEle.getElementsByClassName('description-edit-input')[0];
    var id = ele.getAttribute('data-product-id');
    var created = ele.getAttribute('data-product-created');
      console.log(ele, created)
    var data = {
      product: {
        id: Number(id),
        name: nameInput.value,
        description: descriptionInput.value,
        created: new Date(created),
      },
    };
      Http
      .put('/api/products/update', data)
      .then(() => displayProducts());
  }
  
  /**
   * Delete a product
   */
  function deleteProduct(ele) {
    var id = ele.getAttribute('data-product-id');
      Http
      .delete('/api/products/delete/' + id)
      .then(() => displayProducts());
  }
  