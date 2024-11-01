const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function formatCurrency(amount: Number) {
    return VND.format(+amount);
}

export default formatCurrency;
