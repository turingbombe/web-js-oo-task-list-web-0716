'use strict';
// Lists Controller
class ListsController{
  constructor(){
    this.$addListForm=$('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm= $('#add_task')
    this.$wrapper= $('#wrapper')
  }

  addListFormListener(){
    var self = this
    $('#add_list').submit(function(event){
      event.preventDefault(); 
      var listName = self.$listTitleInput.val()
      var list = new List(listName)
      list.build()
      self.$addTaskForm.one().show()
      self.$listTitleInput.val("")
    })
  }

  addDestroyFormListener(){
    var self = this
    this.$wrapper.on('click', '.destroy-list',function(event){
      var listID = parseInt($(this).parents('h2').next('ul').data('id'))
      List.all.splice(listID, 1, null)
      self.$selectListMenu.find(`option[value="${listID}"]`).remove()
      $(this).parents('.list').remove();
    })
  }

  init(){
    this.$addTaskForm.hide()
    this.addListFormListener()
    this.addDestroyFormListener()
  }
}
