import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { Avatar, Icon } from '@rneui/base';
const stories = [
  { id: 1, name: 'Mi historia', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumr-ynIsoOEzb29PmGsYo5Dfem9Yio8dC8Q&s' },
  { id: 2, name: 'Alejandra', img: 'https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg' },
  { id: 3, name: 'Erick', img: 'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719532800&semt=sph' },
  { id: 4, name: 'Edson', img: 'https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&dpr=1&w=500' },
];

const Post = () => (
  <View style={{ marginBottom: 10 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Avatar rounded source={{ uri: 'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp' }} />
      <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Christian Alonso</Text>
    </View>
    <Image style={{ width: '100%', height: 400 }} source={{ uri: 'https://weremote.net/wp-content/uploads/2022/08/programador-concentrado-ordenador-oficina.jpg' }} />
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100, marginBottom: 4 }}>
        <Icon name="heart" type="font-awesome" />
        <Icon name="comment" type="font-awesome" />
        <Icon name="send" type="font-awesome" />
      </View>
      <Text>218 likes</Text>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Christian </Text>
        Clonando ando ...
      </Text>
    </View>
  </View>
);
const InstagramClone = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 50 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', padding: 10, justifyContent:'space-between'}}>
          <Text style={{fontStyle:'normal',fontSize:20,fontWeight:'bold'}}>Instragram</Text>
          <Icon name='send' type='font-awesome' />
        </View>
        <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#dedede' }}>
          {stories.map((story) => (
            <View key={story.id} style={{ alignItems: 'center', marginRight: 15 }}>
              <Avatar
                rounded
                size="large"
                source={{ uri: story.img }}
              />
              <Text>{story.name}</Text>
            </View>
          ))}
        </View>
        <Post />
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#dedede' }}>
        <Icon name="home" type="font-awesome" />
        <Icon name="search" type="font-awesome" />
        <Icon name="plus-square" type="font-awesome" />
        <Icon name="heart" type="font-awesome" />
        <Icon name="user" type="font-awesome" />
      </View>
    </View>
  );
};

export default InstagramClone;
