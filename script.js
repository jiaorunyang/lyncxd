// 控制聊天窗口的显示和隐藏
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

// 处理发送消息
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // 模拟AI回复
        setTimeout(() => {
            const response = getAIResponse(message);
            addMessage(response, 'ai');
        }, 1000);
    }
}

// 处理按回车发送消息
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// 添加消息到聊天窗口
function addMessage(text, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            ${text}
        </div>
    `;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 简单的AI回复逻辑
function getAIResponse(message) {
    const responses = {
        '你好': '你好！很高兴为你服务。',
        '这个网站是什么': '这是一个展示个人作品的网站，你可以在这里查看我的作品集。',
        '怎么联系你': '你可以通过页面上的联系方式与我取得联系。',
        '作品': '我的作品主要包括网页设计、平面设计等，你可以在作品集中查看详细信息。'
    };

    // 检查是否有匹配的关键词
    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }

    // 默认回复
    return '抱歉，我可能没有完全理解你的问题。你可以换个方式问我，或者直接浏览网站了解更多信息。';
}

// 平滑滚动功能
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav a[href^="#"]');
//     
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             
//             // 获取目标部分的ID
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);
//             
//             if (targetSection) {
//                 // 计算目标位置（考虑固定导航栏的高度）
//                 const offset = 80; // 导航栏高度加一些额外空间
//                 const targetPosition = targetSection.offsetTop - offset;
//                 
//                 // 平滑滚动
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//                 
//                 // 更新活动状态
//                 navLinks.forEach(link => link.classList.remove('active'));
//                 this.classList.add('active');
//             }
//         });
//     });
// });

// 滚动时更新导航栏活动状态
// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('section[id]');
//     const scrollPosition = window.scrollY + 100; // 添加一些偏移量
//
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = section.getAttribute('id');
//         const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
//
//         if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
//             navLink.classList.add('active');
//         }
//     });
// }); 