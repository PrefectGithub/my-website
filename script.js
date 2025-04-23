// 这里我们简单生成一些案例数据
const caseStudies = [
    { title: "小明的逆袭", description: "从失败的学生到百万程序员，如何打破贫穷的循环？" },
    { title: "小李的奇迹", description: "从一家小餐馆老板到大企业创始人，勇敢追求梦想的故事。" },
    { title: "小王的成长", description: "如何从零开始，成功转型为顶尖销售员，实现财富自由。" }
];

// 动态填充案例内容
const caseStudiesContainer = document.getElementById('case-studies');

caseStudies.forEach(study => {
    const div = document.createElement('div');
    div.classList.add('case');
    div.innerHTML = `<h3>${study.title}</h3><p>${study.description}</p>`;
    caseStudiesContainer.appendChild(div);
});
