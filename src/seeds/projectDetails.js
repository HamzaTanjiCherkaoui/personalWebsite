const projectDetailsAPI = {
    projectsDetails:[{
    id:1,
    idea : `<h1>Lorem ipsum dolor.</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, hic.
    <h1>Lorem ipsum dolor.</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fuga qui unde, magnam suscipit fugit, totam quasi vitae repellendus molestiae nulla similique in illum. Debitis nisi vel, ab. Laborum, earum?`,
    title : "Shortcut.io",
    subTitle : "Lorem Ipsum dolor",
    status : "Live",
    github :"https://github.com/HamzaTanjiCherkaoui/ShortcutsIO"

}],
all :function() { return this.projectsDetails },
get : function(id) {return this.projectsDetails.find(p => p.id == id)}
}
export default projectDetailsAPI;