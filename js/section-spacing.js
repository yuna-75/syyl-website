// 动态调整关于我们部分的位置
document.addEventListener('DOMContentLoaded', function() {
    // 获取产品中心和关于我们部分
    const productsSection = document.getElementById('products');
    const aboutSection = document.getElementById('about');
    
    // 确保页面从顶部开始
    if (window.location.hash === '' || window.location.hash === '#') {
        window.scrollTo(0, 0);
    }
    
    // 初始调整，但添加延迟确保页面完全加载
    setTimeout(adjustAboutPosition, 300);
    
    // 监听窗口大小变化，重新调整位置
    window.addEventListener('resize', adjustAboutPosition);
    
    // 监听产品项的悬停事件，因为悬停会改变产品中心的高度
    const productItems = document.querySelectorAll('.product-item');
    let isHovered = false;
    
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            isHovered = true;
            // 延迟执行，等待产品详情展开
            setTimeout(adjustAboutPosition, 500);
        });
        
        item.addEventListener('mouseleave', function() {
            isHovered = false;
            // 延迟执行，等待产品详情收起
            setTimeout(adjustAboutPosition, 500);
        });
    });
    
    // 调整关于我们部分的位置函数
    function adjustAboutPosition() {
        // 获取产品中心的底部位置
        const productsBottom = productsSection.getBoundingClientRect().bottom + window.pageYOffset;
        
        // 获取视口高度
        const viewportHeight = window.innerHeight;
        
        // 根据悬停状态设置不同的间距
        // 当产品项被悬停时，使用0px间距
        // 当产品项未被悬停时，使用-100px间距（负值创建更大的重叠效果）
        const spacing = isHovered ? 0 : -100;
        
        // 计算关于我们部分应该的顶部位置
        const idealAboutTop = productsBottom + spacing;
        
        // 计算需要设置的margin-top值
        const marginTopValue = idealAboutTop - productsSection.offsetTop - productsSection.offsetHeight;
        
        // 设置关于我们部分的顶部位置
        aboutSection.style.marginTop = `${marginTopValue}px`;
        
        // 确保不会自动滚动到关于我们部分
        if (window.location.hash !== '#about') {
            // 如果当前不是要查看关于我们部分，则保持当前滚动位置
            const currentScroll = window.pageYOffset;
            setTimeout(() => {
                if (window.location.hash !== '#about') {
                    window.scrollTo(0, currentScroll);
                }
            }, 10);
        }
    }
    
    // 监听滚动事件，在滚动时也调整位置
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(adjustAboutPosition, 100);
    });
}); 