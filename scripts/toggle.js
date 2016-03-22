(function ()
{
	var navClass = document.getElementById('navbar-collapse').classList;
    document.getElementById('collapse').onclick = function()
    {
    	if(navClass.contains('collapse'))
    	{
    		navClass.remove('collapse');
    	}
    	else
    	{
    		navClass.add('collapse');
    	}
    };
})();