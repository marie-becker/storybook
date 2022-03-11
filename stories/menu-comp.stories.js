import Menu from './menu-comp.vue'

export default {
    title: 'Menu',
    component: Menu,
};


// 👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { Menu },
    setup() {
        //👇 The args will now be passed down to the template
        return { args };
    },
    template: '<Menu v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    item1: "HTML",
    item2: "CSS",
    item3: "Javascript",
    item4: "DOM",
    inline: true
}