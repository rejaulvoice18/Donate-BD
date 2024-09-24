
document.getElementById('btn-donate').addEventListener('click', function(){
    showSectionById('donation-data');
    document.getElementById('btn-donate').classList.add('bg-[#ABEF5F]');
    document.getElementById('btn-history').classList.remove('bg-[#ABEF5F]')

    
})

document.getElementById('btn-history').addEventListener('click', function(){
    showSectionById('history-data');
    document.getElementById('btn-history').classList.add('bg-[#ABEF5F]')
    document.getElementById('btn-donate').classList.remove('bg-[#ABEF5F]');
})