/**
 * 开发中心示例配置文件
 * @type {{url: string, projection: string, origin: number[], resolutions: number[]}[]}
 */
var basemapconfig = [
    {
       url:"http://10.21.232.23:50001/proxy/layer/7BF73BD34B354182B2F0B720BACBC1A5/25A0E34254A04FCFB2E3276924A03615",
        projection:'EPSG:4326',
        origin:[-180.0, 90.0],
        resolutions:[0.0013732910156250004, 0.0006866455078125002, 0.0003433227539062501, 0.00017166137695312505, 0.00008583068847656253, 0.000042915344238281264, 0.000021457672119140632, 0.000010728836059570316, 0.000005364418029785158, 0.000002682209014892579, 0.0000013411045074462895],
        tileSize:[256, 256],
    }
]

var baseImge = {
	url:"http://10.21.232.23:50001/proxy/server/3690D02D718C44B3A98C5E03AD51937A/25A0E34254A04FCFB2E3276924A03615",
	resolutions:[0.0013732910156250004, 0.0006866455078125002, 0.0003433227539062501, 0.00017166137695312505, 0.00008583068847656253, 0.000042915344238281264, 0.000021457672119140632, 0.000010728836059570316, 0.000005364418029785158, 0.000002682209014892579, 0.0000013411045074462895],
	origin:[-180.0, 90.0],
	tileSize:[256, 256],
	projection:'EPSG:4326'

}
var sumapIserverurl = "http://10.21.232.28:8090"
var getPath=function () {
    var curWwwPath=window.document.location.href;
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    var localhostPaht=curWwwPath.substring(0,pos);
    return localhostPaht.replace(':5092','');
}
/**
 *
 */
window.demoIPInfo = {
    project:"portal",//项目名称
    ip:window.location.hostname,//
    port:window.location.port
}

//图层控制树
var layerVisible = [
	{
		layerName:"点图层1",
		url:getPath()+":6080/arcgis/rest/services/jintou0520/jintouxinxi/MapServer/0"
	},
	{
		layerName:"点图层2",
		url:getPath()+":6080/arcgis/rest/services/poi/longhua_xuexiao/MapServer/1"
	},
	{
		layerName:"点图层3",
		url:getPath()+":6080/arcgis/rest/services/poi/longhua_xuexiao/MapServer/0"
	},
	{
		layerName:"点图层4",
		url:getPath()+":6080/arcgis/rest/services/poi/longhua_xuexiao/MapServer/2"
	}
]

var  center_zoom = {
    "section": {//地图基本操作功能
        center:[114.23303593609617, 22.55775183094625],
        zoom:8
    },
    "AddPopup":{
        center:[114.23303593609617, 22.55775183094625],
        zoom:5
    },
    "Service":{
    	center:[114.23303593609617, 22.55775183094625],
        zoom:6
    },
    //点移动
    "pointMove": {
        center:[114.23303593609617, 22.55775183094625],
        zoom:5
    },
    //坐标转换
    "coordTrans":{
        center:[114.23303593609617, 22.55775183094625],
        zoom:15
    },
    //空间分析
    "spatialAnalysis":{
        center:[114.23303593609617, 22.55775183094625],
        zoom:11
    }
}

// //ArcGIS地理编码服务
// var ArcGISGeoCoding = [
//     {
//         //正向地理编码服务
//         geoCodingURL : getPath()+":6080/arcgis/rest/services/zhuhai/zhuhai_CreateAddressLocator/GeocodeServer/findAddressCandidates",
//         //逆向地理编码服务
//         reGeoCodingURL : getPath()+":6080/arcgis/rest/services/zhuhai/zhuhai_CreateAddressLocator/GeocodeServer/reverseGeocode"
//     }
// ]

//立得地理编码服务
var LDGeoCoding = [
    {
        //正向地理编码服务"http://192.168.100.28:8008/?opt=GeoCoding&resultCols=id,name,xcoord,ycoord,adcode,type,matchinfo,precision&adcode=440402&address=",
        geoCodingURL : getPath()+":8008/?opt=GeoCoding&adcode=440402&address=",
        //逆向地理编码服务
        reGeoCodingURL : getPath()+":8008/?opt=reGeoCoding&radius=100"
    }
]

//批量地理编码服务
var batchGeoCoding = [
    {
    	//获取adCode
    	getAdcode : getPath()+":8000/?opt=getadcode",
        //批量正地理编码服务
        batchGeoCodingURL :getPath()+":8008/?opt=GeoCoding",
        //批量逆地理编码服务
        batchReGeoCodingURL : getPath()+":8008/?opt=ReGeoCoding"
    }
]

//多时相WMTS地图控件服务
var muitiView = [
    {
        //多时相地图服务
        muitiViewMapURL : "http://10.21.232.23:50001/proxy/server/AF8CF1CE70A8460B85A2D4155AF755DB/25A0E34254A04FCFB2E3276924A03615",
        layer : "SZIMAGE_SZAVI201712_20ZW2K",
        matrixSet : "EPSG:4326",
        format : "PNG",
        dimensionsTime1 : "2017-12-01",
        dimensionsTime2 : "2019-12-01",
        projection : "EPSG:4326",
        origin : [-180.0, 90.0],
        matrixIds : [0,1,2,3,4,5,6,7,8,9,10],
        resolutions : [0.0013732910156250004, 0.0006866455078125002, 0.0003433227539062501, 0.00017166137695312505, 0.00008583068847656253, 0.000042915344238281264, 0.000021457672119140632, 0.000010728836059570316, 0.000005364418029785158, 0.000002682209014892579, 0.0000013411045074462895],
       
    }
]

//我秀地图
var IshowChinaMap = [
    {
        url: "http://tile5.ishowchina.com/v3/tile/{z}/{x}/{y}.png",
        center: [114.23303593609617, 22.55775183094625],
        center4326: "EPSG:4326",
        center3857: "EPSG:3857",
        zoom: 12,
        minZoom: 0,
        maxZoom: 19
    }
]

//加载WMTS
var loadWMTS = [
    {
        //分辨率
		resolutions: [0.00059486525145757002,
			          0.00029743262572878501,
			          0.00015228550437313792,
                      7.6142752186568962e-005,
			          3.8071376093284481e-005,
			          1.903568804664224e-005,
                      9.5178440233211202e-006,
			          4.7589220116605601e-006],
        matrixIds: [0,1,2,3,4,5,6,7],
        url: "http://10.21.232.28:8090/iserver/services/map-cs/wmts100",
        layer: "relitu_area@10.21.232.25_yt",
        matrixSet: "EPSG:4326",
        format: "PNG",
        projection: "EPSG:4326",
        origin:[-400,400],
        tileSize: [256,256],
        center: [114.23303593609617, 22.55775183094625],
        zoom: 12
    }
]

//加载WMS
var loadWMS = [
    {
        extent: [113.964706420898,22.5850086212158,114.109016418457,22.7712726593018],
        url: "http://10.21.232.28:8090/iserver/services/map-cs/wms111/relitu_area_qz_point@10.21.232.25_yt",
        paramsLAYERS: "0",
        paramsTILED: true,
        serverType: "geoserver",
        transition: 0,
        center: [114.23303593609617, 22.55775183094625],
        zoom: 12,
		resolutions: [0.0013732910156250004, 0.0006866455078125002, 0.0003433227539062501, 0.00017166137695312505, 0.00008583068847656253, 0.000042915344238281264, 0.000021457672119140632, 0.000010728836059570316, 0.000005364418029785158, 0.000002682209014892579, 0.0000013411045074462895],
		tileSize:[256, 256],
    }
]

//加载WFS
var loadWFS = [
    {
        wfsUrl: "http://10.21.232.28:8090/iserver/services/data-cs/wfs100/utf-8",
        typeName: "typename=z10.21.232.25_yt:relitu_area_qz_point",
        center: [114.23303593609617, 22.55775183094625],
        zoom: "12"
    }
]

// //加载WCS
// var loadWCS = [
//     {
//         title: "poi_CameraPoints_2016",
//         extent: [113.04502,22.32649,119.57665,24.32524],
//         url: getPath()+":6080/arcgis/services/poi/CameraPoints_2016/MapServer/WCSServer",
//         SERVICE: 'WCS',
//         VERSION: '1.0.0',
//         REQUEST: 'GetCoverage',
//         COVERAGEID: 'nurc__mosaic',
//         FORMAT: 'image/png',
//         projection: "EPSG:4326",
//         center: [114.23303593609617, 22.55775183094625],
//         zoom:6
//     }
// ]



//CSW服务地址
var CSW = [
    {
        getCatalogTree:getPath()+":5092/portal/rest/portal/catalogPortalRestService/getCatalogTree",
        getByPageWithCatalog:getPath()+":5092/portal/rest/portal/resourcePortalRestService/getByPageWithCatalog"
    }
]

//地图街景图初始化位置坐标及初始化图标位置
var panoramaPosition = [
    {
        position: [114.23303593609617, 22.55775183094625],
        setPositionX: 114.039587,
        setPositionY: 22.699961
    }
]

//图形样式编辑和图形交互编辑中的图形坐标点配置
var FeaturesStylePoint = [
    {
        //点要素
        Point: [114.22984886,22.56032181]
    },
    {
        //线要素
        LineString1: [114.23808861,22.56272507],
        LineString2: [114.22401237,22.55203915]
    },
    {
        //多边形要素
        PolygonPoint1: [114.23143673,22.56229591],
        PolygonPoint2: [114.23572826,22.55710316],
        PolygonPoint3: [114.23147964,22.55478573],
        PolygonPoint4: [114.22684479,22.55654526],
        PolygonPoint5: [114.22830391,22.56087971]
    },
    {
        //圆要素
        Circle: [114.23303593609617, 22.55775183094625],
        radius: 0.003
    }
]

//添加POI中的添加面和添加线
var addPOI = [
    {
        //添加面坐标点
        PolygonPoint1: [114.23143673,22.56229591],
        PolygonPoint2: [114.23572826,22.55710316],
        PolygonPoint3: [114.23147964,22.55478573],
        PolygonPoint4: [114.22684479,22.55654526],
        PolygonPoint5: [114.22830391,22.56087971]
    },
    {

        //添加线坐标点
        LineString1: [114.23808861,22.56272507],
        LineString2: [114.22401237,22.55203915]
    }
]

//高级功能路线规划
var routePlanning = [
    {
        projection: "EPSG:4326",
        center: [114.07734, 22.67068],
        zoom: 15,
        minZoom: 2,
        maxZoom: 18,
        startPoint: [114.109992,22.629503],
        endPoint: [114.056454 , 22.587744],
        coordinateSystem: "wgs84"
    }
]

//POI查询服务
var poiSearch = [
    {
        //关键字查询服务
        findServiceURL: "http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615",
        findServiceLayerIds: [0],
        //范围查询服务
        IdentifyServiceURL: "http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615",
        IdentifyServiceLayerIds: [0],
        //要素服务查询服务
        mapserverArcgisURL: "http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615/0/query",
    }
]

//OGC标准WFS服务查询
var OGCSearch = [
    {
        //底图
        url: "http://10.21.239.108:8090/iserver/services/map-sf/wmts100",
        layer: "szimage_4490",
        matrixSet: "EPSG:4326",
        format: "PNG",
        origin: [-180, 90],
        center: [114.23303593609617, 22.55775183094625 ],
        zoom: 5
    },
    {
        //wfsUrl
        wfsUrl: "http://10.21.232.28:8090/iserver/services/data-cs/wfs100/utf-8",
    },
    {
		
        //使用ogc标准的wfs服务
        srsName:"EPSG:4326",
        featureNS:"http://10.21.232.28:8090/iserver/services/data-cs/wfs100/utf-8",
        ////图层名前缀
        featurePrefix:"z10.21.232.25_yt",
        geometryName:"the_geom",
        //图层名
        featureTypes:"yantianqu_unit",
        //要素查询条件
        filter: ""
    }
]
//ArcGIS POI分页查询
var pageBasemap = [
    {
        url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",
        projection:'EPSG:3857',
        origin:[-20037508.342787, 20037508.342787],
        resolutions:[156543.03392800014, 78271.51696399994, 39135.75848200009, 19567.87924099992, 9783.93962049996, 4891.96981024998, 2445.98490512499, 1222.992452562495, 611.4962262813797,
            305.74811314055756, 152.87405657041106, 76.43702828507324, 38.21851414253662, 19.10925707126831, 9.554628535634155, 4.77731426794937, 2.388657133974685, 1.1943285668550503,
            0.5971642835598172, 0.29858214164761665, 0.14929107082380833, 0.07464553541190416, 0.03732276770595208, 0.01866138385297604]
    },
    {
        queryURL:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/HarperSumnerOGWells/FeatureServer/0/query?f=json&outFields=*&spatialRel=esriSpatialRelIntersects&where=STATUS%20%3D%20%27EOR%27%20OR%20STATUS%20%3D%20%27GAS%27%20OR%20STATUS%20%3D%20%27INJ%27%20OR%20STATUS%20%3D%20%27O%26G%27%20OR%20STATUS%20%3D%20%27OIL%27%20OR%20STATUS%20%3D%20%27SWD%27",
        pageQueryURL:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/HarperSumnerOGWells/FeatureServer/0/query?f=json&outFields=*&outSR=102100&spatialRel=esriSpatialRelIntersects"
    }
]

var pageCenter_zoom = {
    "page":{
        center:[-10909687.804773072, 4463802.773993778],
        zoom:10
    }
}

//空间分析
var spatialAnalysis = [
    {
//  	缓冲页面中心点坐标
    	center:[114.23303593609617, 22.55775183094625],
    	zoom:5,

    	//缓冲点坐标
    	Point : [114.23303593609617, 22.55775183094625],

        //缓冲线坐标
    	LineString1: [114.23808861,22.56272507],
    	LineString2: [114.22401237,22.55203915],

        //缓冲面坐标
        Polygon1: [114.23143673,22.56229591],
        Polygon2: [114.23572826,22.55710316],
        Polygon3: [114.23147964,22.55478573],
        Polygon4: [114.22684479,22.55654526],
        Polygon5: [114.22830391,22.56087971],
        //缓冲区
        bufferURL:"http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A036155/buffer",
        //相交
        intersectURL:"http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615/intersect",
        //并集
        unionURL:"http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615/union",
        //差异分析
        differenceURL:"http://10.21.239.110:50001/proxy/layer/13E75E58EB7248A28D410262604095AF/25A0E34254A04FCFB2E3276924A03615/difference",

    },
    {
        //相交、并集、差异图形坐标
        //多边形1
         polygon1:[[114.23461890,22.56127453], [114.23042822, 22.55083752], [114.23281646,22.56438589], [114.23663592,22.56296968]],
        polygon2:[[114.23265767,22.56102991],[114.23452449,22.55744648],[114.22816014,22.55861378],[114.22406173,22.56215429]]
    }
]

//点移动中的时间控制对象
if(!window.timeControl) {
    window.timeControl = {};
}
//点移动路线
var moveConfig =[
    {
        moveLine: [
            [
                114.23808861,22.56272507
            ],
            [
                114.233325,22.55869102
            ],
            [
               114.22929096,22.55641651
            ],
            [
                114.22401237,22.55203915
            ],
            [
               114.21860504,22.55718899
            ],
            [
                114.22564316,22.55671692
            ]
           
           
        ]
    },
    {
        startPoint: [114.23808861,22.56272507]
    },
    {
        endPoint: [114.22564316,22.55671692]
    }
]

