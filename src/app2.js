import './app2.css'
import $ from 'jquery'
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $('#app2 .tab-content')
const index = localStorage.getItem('app2.index')

$tabBar.on("click","li",e=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    localStorage.setItem('app2.index',index)
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
// 上面的addClass和removeClass做到：样式和行为分离
//千万不要用js操作css，而且hide和show也不要使用

$tabBar.children().eq(index).trigger('click')