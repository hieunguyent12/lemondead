function Test() {
  return (
    <div className="bg-red-400">
      <p>Hi</p>
    </div>
  );
}

export default {
  component: Test,
  title: "Test",
};

const Template = (args) => <Test {...args} />;

export const Primary = Template.bind({});
