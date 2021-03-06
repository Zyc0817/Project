import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'
import { Link } from 'react-router-dom'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
        this.state = {
            index: 0
        }
    }
    render() {
        var opt = {
            
            callback: function(index) {
                this.setState({index: index})
            }.bind(this)
        }


        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian/景点"><li className="float-left jingdian">景点</li></Link>
                            <Link to="/search/ktv/KTV"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/search/gouwu/购物"><li className="float-left gouwu">购物</li></Link>
                            <Link to="/search/shenghuofuwu/生活服务"><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to="/search/jianshenyundong/健身运动"><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to="/search/meifa/美发"><li className="float-left meifa">美发</li></Link>
                            <Link to="/search/qinzi/亲子"><li className="float-left qinzi">亲子</li></Link>
                            <Link to="/search/xiaochikuaican/小吃快餐"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/search/zizhucan/自助餐"><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to="/search/jiuba/酒吧"><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/meishi/美食"><li className="float-left meishi">美食</li></Link>
                            <Link to="/search/dianying/电影"><li className="float-left dianying">电影</li></Link>
                            <Link to="/search/jiudian/酒店"><li className="float-left jiudian">酒店</li></Link>
                            <Link to="/search/xuixianyule/休闲娱乐"><li className="float-left xuixianyule">休闲娱乐</li></Link>
                            <Link to="/search/waimai/外卖"><li className="float-left waimai">外卖</li></Link>
                            <Link to="/search/huoguo/火锅"><li className="float-left huoguo">火锅</li></Link>
                            <Link to="/search/liren/丽人"><li className="float-left liren">丽人</li></Link>
                            <Link to="/search/dujiachuxing/度假出行"><li className="float-left dujiachuxing">度假出行</li></Link>
                            <Link to="/search/zuliaoanmo/足疗按摩"><li className="float-left zuliaoanmo">足疗按摩</li></Link>
                            <Link to="/search/zhoubianyou/周边游"><li className="float-left zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                            <Link to="/search/spa"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="float-left jiehun">结婚</li></Link>
                            <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to="/search/xican"><li className="float-left xican">西餐</li></Link>
                            <Link to="/search/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to="/search/shaokao"><li className="float-left shaokao">烧烤</li></Link>
                            <Link to="/search/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
                            <Link to="/search/chongwu"><li className="float-left chongwu">宠物</li></Link>
                            <Link to="/search/all"><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Category