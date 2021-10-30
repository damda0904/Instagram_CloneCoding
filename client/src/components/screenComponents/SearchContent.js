import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import SearchContentView from './SearchContentView';

const SearchContent = () => {
    const searchData = [
        {
            id:0,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:1,
            images:[
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:2,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg")
            ]
        },
        {
            id:3,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:4,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:5,
            images:[
                require("../../storage/images/postImage.jpeg")
            ]
        },
        {
            id:3,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:4,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:5,
            images:[
                require("../../storage/images/postImage.jpeg")
            ]
        },
        {
            id:0,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:1,
            images:[
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:2,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg")
            ]
        },
        {
            id:3,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:4,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:5,
            images:[
                require("../../storage/images/postImage.jpeg")
            ]
        },
        {
            id:3,
            images:[
                require("../../storage/images/postImage.jpeg"),
            ]
        },
        {
            id:4,
            images:[
                require("../../storage/images/postImage.jpeg"),
                require("../../storage/images/userImage.jpeg"),
            ]
        },
        {
            id:5,
            images:[
                require("../../storage/images/postImage.jpeg")
            ]
        },
    ]

    const [post,setPost] = useState(false);
    const showPost = () => {
        setPost(true);
    }
    return (
        <View style={styles.SearchContentList}>
        {searchData.map((data,index)=>{
            return(
                <TouchableOpacity style={styles.SearchContent} onPress={showPost}>
                    <Image source={data.images[0]} style={styles.SearchContentImg}/>
                </TouchableOpacity>
            );

        })}
        {/* {post && <SearchContentView/> } */}
        </View>
    );
};

const styles = StyleSheet.create({
    SearchContentList:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        width:'100%'
    },
    SearchContent:{
        width:'33%',
        height:130,
        marginBottom:2
    },
    SearchContentImg:{
        width:'100%',
        height:'100%'
    },

})

{/* {data.id === 1? (
                    <View style={{flexDirection:'row',justifyContent:'space-beetween'}}>
                        <View style={{flexDirection:'row',flexWrap:'wrap',width:261,justifyContent:'space-between'}}>
                            {data.images.slice(0,4).map((imageData,imgIndex) => {
                                return(
                                    <TouchableOpacity>
                                        <Image source={{imageData}} style={{width:129,height:150}}/>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <TouchableOpacity style={{marginLeft:2}}>
                            <Image source={data.images[5]} style={{width:129,height:300}}/>
                        </TouchableOpacity>
                    </View>
                ):null}

                {data.id === 2 ? (
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>
                        <TouchableOpacity style={{paddingRight:2}}>
                            <Image source={data.images[2]} style={{width:260,height:300}}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',flexWrap:'wrap',width:120,justifyContent:'space-between'}}>
                            {data.images.slice[0,2].map((imgData,imgIndex) => {
                                return(
                                    <TouchableOpacity style={{paddingBottom:2}}>
                                        <Image source={imgData} style={{width:129,height:150}}/>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                ):null} */}
export default SearchContent