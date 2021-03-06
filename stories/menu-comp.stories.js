import Menu from './menu-comp.vue'

export default {
    title: 'Menu',
    component: Menu,
};


// ๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => ({
    components: { Menu },
    setup() {
        //๐ The args will now be passed down to the template
        return { args };
    },
    template: '<Menu v-bind="args" />',
});

//๐ Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    item1: "HTML",
    item2: "CSS",
    item3: "Javascript",
    item4: "DOM",
    inline: true
}