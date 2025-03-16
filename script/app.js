// 初始化分类功能
document.addEventListener('DOMContentLoaded', () => {
    // 绑定导航点击事件
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.addEventListener('click', function() {
            // 移除其他激活状态
            document.querySelectorAll('.nav-menu li').forEach(li => 
                li.classList.remove('active'));
            
            // 设置当前激活状态
            this.classList.add('active');
            
            // 获取选择的系列
            const series = this.dataset.series;
            filterProducts(series);
        });
    });

    // 初始化显示全部商品
    filterProducts('all');
});

// 商品筛选函数
function filterProducts(series) {
    const allProducts = document.querySelectorAll('.product-card');
    
    allProducts.forEach(product => {
        const shouldShow = series === 'all' || 
                         product.dataset.series === series;
        product.hidden = !shouldShow;
    });
}

// 搜索功能
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    document.querySelectorAll('.product-card').forEach(card => {
        const model = card.dataset.model.toLowerCase();
        const isVisible = model.includes(searchTerm);
        card.hidden = !isVisible;
    });
}