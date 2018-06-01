 
    var PagedList = function () {
        Sourcedata = []; //记录原始数据
        TotalItemCount = 0; //记录总条数
        PageSize = 10; //设置每页示数目
        CurrentPageIndex = 1; //当前页，默认为1
        //TotalPageCount=0    //计算总页数
        function ComputeTotalPage()  ////计算总页数
        {

            return Math.ceil(TotalItemCount / PageSize);
        }
        function StartRecordIndex()  //开始下标
        {

            return (CurrentPageIndex - 1) * PageSize
        }
        function EndRecordIndex()  //结束下标
        {

            return TotalItemCount > CurrentPageIndex * PageSize ? CurrentPageIndex * PageSize : TotalItemCount;
        }
        Pageddata = function ()  //分页后数据
        {
            var StartPage = StartRecordIndex();
            var EndPage = EndRecordIndex();
            var pageOfItems = []
            for (var i = StartPage; i < EndPage; i++) {
                pageOfItems.push(Sourcedata[i])
            }
            return pageOfItems;
        }
        initdata = function (sourcedata, pagesize) {
            Sourcedata = sourcedata;
            TotalItemCount = sourcedata.length;
            PageSize = pagesize;
        }
        getPagetoList = function (currentPageIndex) {
            CurrentPageIndex = currentPageIndex;
            return Pageddata();
        }
        return {
            initdata: initdata,
            getPagetoList: getPagetoList,
            TotalPageCount: ComputeTotalPage
        }

    }

var PagedBtn=function ()
{
    TotalPageCount = 5;  //总页数
    ShowPageCount = 5;  //显示页数
    CurrentPageIndex = 1;  //当前页数
    MiddlePagecount=3 //中间页数
    SubtractPage=2; //减数

    StartRecordIndex = function ()  //开始下标
    {
        var StartPage=1;
        //总页数小于显示页数
        if(TotalPageCount<ShowPageCount)
        {
            StartPage=1;
        }
            //当前页数小于开始的中间页数
        else if(CurrentPageIndex<MiddlePagecount)
        {
            EndPage=1;
        }
            //当前页数大于最后的中间页数
        else  if(CurrentPageIndex>TotalPageCount-SubtractPage)
        {
            StartPage=TotalPageCount-SubtractPage-(SubtractPage);
        }

        else
        {
            StartPage=CurrentPageIndex-(SubtractPage);
        }

        return StartPage;
    }
    EndRecordIndex = function ()  //结束下标
    {
        var EndPage=5;
        if(TotalPageCount<ShowPageCount)
        {
            EndPage = TotalPageCount;
        }
        else if(CurrentPageIndex<MiddlePagecount)
        {
            EndPage=ShowPageCount;
        }
            //当前页数大于最后的中间页数
        else  if(CurrentPageIndex>TotalPageCount-SubtractPage)
        {
            EndPage=TotalPageCount;
        }
        else
        {
            EndPage=CurrentPageIndex+(SubtractPage);
        }
        return EndPage;
    }
    initdata = function (totalPageCount, showPageCount) {
        TotalPageCount = totalPageCount;
        ShowPageCount = showPageCount;
        MiddlePagecount=Math.ceil(showPageCount / 2);
        SubtractPage=MiddlePagecount-1;
    }
    Pagedbtns = function ()  //分页后数据
    {
        var btns = [];
        var StartPage = StartRecordIndex();
        var EndPage = EndRecordIndex();
        for (var i = StartPage; i <= EndPage; i++) {
            btns.push(i)
        }
        return btns;
    }
    getBtntoList = function (CurrentPageIndex) {
        CurrentPageIndex = CurrentPageIndex;
        return Pagedbtns();
    }
    return {
        initdata: initdata,
        getBtntoList: getBtntoList
    }
}
 