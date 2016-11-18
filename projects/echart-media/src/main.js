
import echarts from 'echarts';
// import echarts from 'echarts/dist/echarts.min.js';
import './assets/js/timelineGDP.js';
const myChart = echarts.init(document.querySelector('#main'));


var option = {
        baseOption: {
            title : {
                text: '南丁格尔玫瑰图',
                subtext: '纯属虚构',
                x:'center',						//官方文档已经找不到这个配置项了
                // y: 'center'
            },
            tooltip : {
                trigger: 'item',						//提示信息触发的类型
                formatter: "{a} <br/>{b} : {c} ({d}%)"	//提示框内容格式
                // formatter: function(params, ticket, callback){
                // 	setTimeout(function(){
                // 		callback(ticket, '<span>ticket</span>')
                // 	}, 1000);
                // 	return 'Loading'
                // }
            },
            legend: {
                data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                // feature : {
                //     mark : {show: true},
                //     dataView : {show: true, readOnly: false},
                //     magicType : {
                //         show: true,
                //         type: ['pie', 'funnel']
                //     },
                //     restore : {show: true},
                //     saveAsImage : {show: true}
                // }
            },
            calculable : false,						//官方文档也没有
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                },
                {
                    name:'面积模式',
                    type:'pie',
                    roseType : 'area',
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]
        },
        media: [
            {
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['25%', '50%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['75%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    minAspectRatio: 1
                },
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['25%', '50%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['75%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    maxAspectRatio: 1
                },
                option: {
                    legend: {
                        right: 'center',
                        bottom: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['50%', '30%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['50%', '70%']
                        }
                    ]
                }
            },
            {
                query: {
                    maxWidth: 500
                },
                option: {
                    legend: {
                        right: 10,
                        top: '15%',
                        orient: 'vertical'
                    },
                    series: [
                        {
                            radius: [20, '50%'],
                            center: ['50%', '30%']
                        },
                        {
                            radius: [30, '50%'],
                            center: ['50%', '75%']
                        }
                    ]
                }
            }
        ]
    };


myChart.setOption(option);


const myChart2 = echarts.init(document.querySelector('#main2'));
 var categoryData = [
        '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
        '上海','江苏','浙江','安徽','福建','江西','山东','河南',
        '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
        '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
    ];


    option = {
        baseOption: {
            timeline: {
                axisType: 'category',							//时间轴的类型
                autoPlay: true,									//是否自动播放
                playInterval: 1000,								//播放的速度
                data: [
                    '2002-01-01', '2003-01-01', '2004-01-01',
                    '2005-01-01', '2006-01-01', '2007-01-01',
                    '2008-01-01', '2009-01-01', '2010-01-01',
                    '2011-01-01'
                ],
                label: {
                    formatter : function(s) {
                        return (new Date(s)).getFullYear();
                    }
                }
            },
            title: {
                subtext: 'Media Query 示例'
            },
            tooltip: {
                trigger:'axis',
                axisPointer: {
                    type: 'shadow'								//提示信息的指示器
                },
                //同时这里可以设置提示信息的style
            },
            xAxis: {
                type: 'value',									//值为value适用于连续数据
                name: 'GDP（亿元）',								
                max: 30000,	//坐标轴最大值
                data: null	//在type=category时，才有效
            },
            yAxis: {
                type: 'category',
                data: categoryData,
                //坐标轴刻度标签相关设置
                axisLabel: {
                	interval: 0,
                	rotate: 15
                },	//坐标轴刻度标签显示的间隔	
                splitLine: {show: false}
            },
            legend: {
                data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
                selected: {
                    'GDP': false, '金融': false, '房地产': false
                }
            },
            calculable : true,
            series: [
                {name: 'GDP', type: 'bar'},
                {name: '金融', type: 'bar'},
                {name: '房地产', type: 'bar'},
                {name: '第一产业', type: 'bar'},
                {name: '第二产业', type: 'bar'},
                {name: '第三产业', type: 'bar'},
                {name: 'GDP占比', type: 'pie'}
            ]
        },
        media: [
            {
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 'right',
                        itemGap: 10
                    },
                    grid: {
                        left: '10%',
                        top: 80,
                        right: 90,
                        bottom: 100
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                        splitLine: {
                            show: true
                        }
                    },
                    timeline: {
                        orient: 'horizontal',
                        inverse: false,
                        left: '20%',
                        right: '20%',
                        bottom: 10,
                        height: 40
                    },
                    series: [
                        {name: 'GDP占比', center: ['75%', '30%'], radius: '28%'}
                    ]
                }
            },
            {
                query: {maxWidth: 670, minWidth: 550},
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 200,
                        itemGap: 5
                    },
                    grid: {
                        left: '10%',
                        top: 80,
                        right: 90,
                        bottom: 100
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                        splitLine: {
                            show: true
                        }
                    },
                    timeline: {
                        orient: 'horizontal',
                        inverse: false,
                        left: '20%',
                        right: '20%',
                        bottom: 10,
                        height: 40
                    },
                    series: [
                        {name: 'GDP占比', center: ['75%', '30%'], radius: '28%'}
                    ]
                }
            },
            {
                query: {maxWidth: 550},
                option: {
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        itemGap: 5
                    },
                    grid: {
                        left: 55,
                        top: '32%',
                        right: 100,
                        bottom: 50
                    },
                    xAxis: {
                        nameLocation: 'middle',
                        nameGap: 25,
                        splitNumber: 3
                    },
                    timeline: {
                        orient: 'vertical',
                        inverse: true,
                        right: 10,
                        top: 150,
                        bottom: 10,
                        width: 55
                    },
                    series: [
                        {name: 'GDP占比', center: ['45%', '20%'], radius: '28%'}
                    ]
                }
            }
        ],
        options: [
            {
                title: {text: '2002全国宏观经济指标'},
                series: [
                    {data: dataMap.dataGDP['2002']},
                    {data: dataMap.dataFinancial['2002']},
                    {data: dataMap.dataEstate['2002']},
                    {data: dataMap.dataPI['2002']},
                    {data: dataMap.dataSI['2002']},
                    {data: dataMap.dataTI['2002']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2002sum']},
                        {name: '第二产业', value: dataMap.dataSI['2002sum']},
                        {name: '第三产业', value: dataMap.dataTI['2002sum']}
                    ]}
                ]
            },
            {
                title : {text: '2003全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2003']},
                    {data: dataMap.dataFinancial['2003']},
                    {data: dataMap.dataEstate['2003']},
                    {data: dataMap.dataPI['2003']},
                    {data: dataMap.dataSI['2003']},
                    {data: dataMap.dataTI['2003']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2003sum']},
                        {name: '第二产业', value: dataMap.dataSI['2003sum']},
                        {name: '第三产业', value: dataMap.dataTI['2003sum']}
                    ]}
                ]
            },
            {
                title : {text: '2004全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2004']},
                    {data: dataMap.dataFinancial['2004']},
                    {data: dataMap.dataEstate['2004']},
                    {data: dataMap.dataPI['2004']},
                    {data: dataMap.dataSI['2004']},
                    {data: dataMap.dataTI['2004']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2004sum']},
                        {name: '第二产业', value: dataMap.dataSI['2004sum']},
                        {name: '第三产业', value: dataMap.dataTI['2004sum']}
                    ]}
                ]
            },
            {
                title : {text: '2005全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2005']},
                    {data: dataMap.dataFinancial['2005']},
                    {data: dataMap.dataEstate['2005']},
                    {data: dataMap.dataPI['2005']},
                    {data: dataMap.dataSI['2005']},
                    {data: dataMap.dataTI['2005']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2005sum']},
                        {name: '第二产业', value: dataMap.dataSI['2005sum']},
                        {name: '第三产业', value: dataMap.dataTI['2005sum']}
                    ]}
                ]
            },
            {
                title : {text: '2006全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2006']},
                    {data: dataMap.dataFinancial['2006']},
                    {data: dataMap.dataEstate['2006']},
                    {data: dataMap.dataPI['2006']},
                    {data: dataMap.dataSI['2006']},
                    {data: dataMap.dataTI['2006']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2006sum']},
                        {name: '第二产业', value: dataMap.dataSI['2006sum']},
                        {name: '第三产业', value: dataMap.dataTI['2006sum']}
                    ]}
                ]
            },
            {
                title : {text: '2007全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2007']},
                    {data: dataMap.dataFinancial['2007']},
                    {data: dataMap.dataEstate['2007']},
                    {data: dataMap.dataPI['2007']},
                    {data: dataMap.dataSI['2007']},
                    {data: dataMap.dataTI['2007']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2007sum']},
                        {name: '第二产业', value: dataMap.dataSI['2007sum']},
                        {name: '第三产业', value: dataMap.dataTI['2007sum']}
                    ]}
                ]
            },
            {
                title : {text: '2008全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2008']},
                    {data: dataMap.dataFinancial['2008']},
                    {data: dataMap.dataEstate['2008']},
                    {data: dataMap.dataPI['2008']},
                    {data: dataMap.dataSI['2008']},
                    {data: dataMap.dataTI['2008']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2008sum']},
                        {name: '第二产业', value: dataMap.dataSI['2008sum']},
                        {name: '第三产业', value: dataMap.dataTI['2008sum']}
                    ]}
                ]
            },
            {
                title : {text: '2009全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2009']},
                    {data: dataMap.dataFinancial['2009']},
                    {data: dataMap.dataEstate['2009']},
                    {data: dataMap.dataPI['2009']},
                    {data: dataMap.dataSI['2009']},
                    {data: dataMap.dataTI['2009']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2009sum']},
                        {name: '第二产业', value: dataMap.dataSI['2009sum']},
                        {name: '第三产业', value: dataMap.dataTI['2009sum']}
                    ]}
                ]
            },
            {
                title : {text: '2010全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2010']},
                    {data: dataMap.dataFinancial['2010']},
                    {data: dataMap.dataEstate['2010']},
                    {data: dataMap.dataPI['2010']},
                    {data: dataMap.dataSI['2010']},
                    {data: dataMap.dataTI['2010']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2010sum']},
                        {name: '第二产业', value: dataMap.dataSI['2010sum']},
                        {name: '第三产业', value: dataMap.dataTI['2010sum']}
                    ]}
                ]
            },
            {
                title : {text: '2011全国宏观经济指标'},
                series : [
                    {data: dataMap.dataGDP['2011']},
                    {data: dataMap.dataFinancial['2011']},
                    {data: dataMap.dataEstate['2011']},
                    {data: dataMap.dataPI['2011']},
                    {data: dataMap.dataSI['2011']},
                    {data: dataMap.dataTI['2011']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2011sum']},
                        {name: '第二产业', value: dataMap.dataSI['2011sum']},
                        {name: '第三产业', value: dataMap.dataTI['2011sum']}
                    ]}
                ]
            }
        ]
    };

    myChart2.setOption(option);

myChart2.on('click', function(params){
	console.log(params);
	console.log(11111111111)
})


const myChart3 = echarts.init(document.querySelector('#main3'));
option = {
    title : {
        text: '饼图程序调用高亮示例',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart3.setOption(option);
var app = {};
app.currentIndex = -1;

app.timeTicket = setInterval(function () {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart3.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart3.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 显示 tooltip
    myChart3.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);



