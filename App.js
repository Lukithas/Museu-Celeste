import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal, TextInput, Switch, Button, Alert, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const imagemFundoEstrelado = { uri: 'https://www.transparenttextures.com/patterns/stardust.png' };

const historiaCruzeiro = [
  { id: '1', titulo: 'O Gênio Tostão', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G5thZj74E0NSqxbpFs8tdkgjAyyRR3KDA&s', descricao: 'Um dos maiores gênios do futebol brasileiro, Tostão é o grande ídolo incontestável da história do Cruzeiro. Com sua visão de jogo formidável e inteligência rara, ele foi o maestro da equipe que conquistou o Brasil em 1966, imortalizando a camisa celeste para sempre e se consagrando mundialmente.' },
  { id: '2', titulo: 'Libertadores de 1997', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACHgDR-jHv7WrdKeLyJBwxP5cKzEaql7Acw&s', descricao: 'Com o Mineirão superlotado pulsando em uma só voz, o Cruzeiro alcançou a glória máxima da América pela segunda vez em sua história. O gol histórico e chorado de Elivélton no final da partida contra o Sporting Cristal fez a nação azul explodir em uma das maiores festas já vistas.' },
  { id: '3', titulo: 'A Tríplice Coroa (2003)', imagem: 'https://cdn.resfu.com/scripts/tmp_images/goal_cruzeiro-2003_nq8031o3iiz01kvhbuld0qklu.jpg?size=1200x&lossy=1', descricao: 'O ano mágico de dois mil e três ficou eternizado na memória e no coração de cada cruzeirense. Liderados pelo craque Alex e sob a batuta de Vanderlei Luxemburgo, o Cruzeiro conquistou o Campeonato Mineiro, a Copa do Brasil e o Brasileirão, uma façanha inédita no futebol do país.' },
  { id: '4', titulo: 'O Príncipe Dirceu Lopes', imagem: 'https://www.ogol.com.br/img/history/imgS620I12481T20230124105440.png', descricao: 'Conhecido carinhosamente como o Príncipe, Dirceu Lopes desfilava pelos gramados com a eterna camisa dez do Cruzeiro. Sua parceria antológica com Tostão rendeu títulos inesquecíveis e colocou o clube mineiro no mapa do futebol mundial, encantando diversas gerações com dribles desconcertantes, dinamismo e gols verdadeiramente espetaculares.' },
  { id: '5', titulo: 'Tetracampeonato (2014)', imagem: 'https://elencos.com.br/wp-content/uploads/2020/04/elenco-cruzeiro-2014.jpg', descricao: 'Consolidando um domínio absoluto e inquestionável no cenário nacional, o esquadrão de dois mil e quatorze deu um verdadeiro show de bola. Comandados por Everton Ribeiro e Ricardo Goulart, o Cruzeiro garantiu o tetracampeonato brasileiro de forma brilhante, encantando o país com um futebol altamente ofensivo, letal e envolvente.' }
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  
  const [pickerCategoria, setPickerCategoria] = useState('Título');
  const [pickerDecada, setPickerDecada] = useState('Anos 2000');
  
  const [sliderEmocao, setSliderEmocao] = useState(10);
  const [sliderJogos, setSliderJogos] = useState(50);
  
  const [switchSocio, setSwitchSocio] = useState(true);
  const [switchAoVivo, setSwitchAoVivo] = useState(true);

  const enviarMemoria = () => {
    Alert.alert("Memória Registrada!", `Obrigado por compartilhar sua história celeste, ${input1 || 'Torcedor'}!`);
  };

  const limparFormulario = () => {
    setInput1(''); setInput2(''); setInput3(''); setInput4('');
    setPickerCategoria('Título'); setPickerDecada('Anos 2000');
    setSliderEmocao(10); setSliderJogos(50);
    setSwitchSocio(true); setSwitchAoVivo(true);
  };

  const abrirDetalhes = (item) => {
    setItemSelecionado(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => abrirDetalhes(item)}>
      <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
      <Text style={styles.cardTitulo}>{item.titulo}</Text>
      <Text style={styles.cliqueAqui}>Toque para relembrar a história</Text>
    </TouchableOpacity>
  );

  const Header = () => (
    <View style={styles.header}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png' }} style={styles.logo} />
      <Text style={styles.headerTitle}>Museu Celeste</Text>
      <Text style={styles.headerSubtitle}>A História do Maior de Minas</Text>
    </View>
  );

  const FooterFormulario = () => (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Registre sua Memória Celeste</Text>
      
      <TextInput style={styles.input} placeholder="Seu Nome" value={input1} onChangeText={setInput1} />
      <TextInput style={styles.input} placeholder="Qual seu Ídolo Favorito?" value={input2} onChangeText={setInput2} />
      <TextInput style={styles.input} placeholder="Um Jogo Inesquecível" value={input3} onChangeText={setInput3} />
      <TextInput style={styles.input} placeholder="Sua Cidade e Estado" value={input4} onChangeText={setInput4} />

      <Text style={styles.label}>Categoria da Memória:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={pickerCategoria} onValueChange={setPickerCategoria}>
          <Picker.Item label="Título Histórico" value="Título" />
          <Picker.Item label="Partida Marcante" value="Partida" />
          <Picker.Item label="Atuação de Ídolo" value="Ídolo" />
        </Picker>
      </View>

      <Text style={styles.label}>Década do Ocorrido:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={pickerDecada} onValueChange={setPickerDecada}>
          <Picker.Item label="Anos 60 (Era Tostão)" value="Anos 60" />
          <Picker.Item label="Anos 90 (Bi da Libertadores)" value="Anos 90" />
          <Picker.Item label="Anos 2000 (Tríplice Coroa)" value="Anos 2000" />
          <Picker.Item label="Anos 2010 (Era do Tetra)" value="Anos 2010" />
        </Picker>
      </View>

      <Text style={styles.label}>Nível de Emoção: {Math.round(sliderEmocao)}</Text>
      <Slider style={styles.slider} minimumValue={0} maximumValue={10} value={sliderEmocao} onValueChange={setSliderEmocao} minimumTrackTintColor="#0033A0" maximumTrackTintColor="#000000" />

      <Text style={styles.label}>Vezes que já foi ao Mineirão: {Math.round(sliderJogos)}</Text>
      <Slider style={styles.slider} minimumValue={0} maximumValue={100} value={sliderJogos} onValueChange={setSliderJogos} minimumTrackTintColor="#0033A0" maximumTrackTintColor="#000000" />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>É Sócio 5 Estrelas?</Text>
        <Switch value={switchSocio} onValueChange={setSwitchSocio} trackColor={{ true: '#0033A0' }} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Assistiu a esse jogo ao vivo?</Text>
        <Switch value={switchAoVivo} onValueChange={setSwitchAoVivo} trackColor={{ true: '#0033A0' }} />
      </View>

      <View style={styles.botoesContainer}>
        <Button title="Enviar Memória" color="#0033A0" onPress={enviarMemoria} />
        <View style={{ height: 10 }} />
        <Button title="Limpar Campos" color="#d9534f" onPress={limparFormulario} />
      </View>

      <View style={styles.footerInfo}>
        <Text style={styles.footerText}>Desenvolvido por Lucas Bretas</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={imagemFundoEstrelado} style={styles.backgroundImage} resizeMode="repeat">
      <View style={styles.container}>
        <FlatList
          data={historiaCruzeiro}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListHeaderComponent={Header()}
          ListFooterComponent={FooterFormulario()}
          showsVerticalScrollIndicator={false}
        />

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              {itemSelecionado && (
                <ScrollView>
                  <Image source={{ uri: itemSelecionado.imagem }} style={styles.modalImagem} />
                  <Text style={styles.modalTitulo}>{itemSelecionado.titulo}</Text>
                  <Text style={styles.modalDescricao}>{itemSelecionado.descricao}</Text>
                  <View style={styles.btnFechar}>
                    <Button title="Fechar História" color="#0033A0" onPress={() => setModalVisible(false)} />
                  </View>
                </ScrollView>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, width: '100%', height: '100%', backgroundColor: '#001A57' },
  container: { flex: 1, backgroundColor: 'transparent', paddingTop: 40 },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 120, height: 120, resizeMode: 'contain', marginBottom: 10 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
  headerSubtitle: { fontSize: 16, color: '#DDD', fontStyle: 'italic', marginBottom: 10 },
  card: { backgroundColor: '#fff', marginHorizontal: 20, marginBottom: 15, borderRadius: 10, overflow: 'hidden', elevation: 4 },
  cardImagem: { width: '100%', height: 130 },
  cardTitulo: { fontSize: 18, fontWeight: 'bold', padding: 10, color: '#0033A0' },
  cliqueAqui: { fontSize: 12, color: '#555', paddingHorizontal: 10, paddingBottom: 10, fontStyle: 'italic' },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0,20,80,0.9)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { width: '90%', maxHeight: '85%', backgroundColor: '#fff', borderRadius: 15, padding: 20, elevation: 5 },
  modalImagem: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  modalTitulo: { fontSize: 22, fontWeight: 'bold', color: '#0033A0', marginBottom: 10, textAlign: 'center' },
  modalDescricao: { fontSize: 16, color: '#333', lineHeight: 26, textAlign: 'justify' },
  btnFechar: { marginTop: 25 },
  formContainer: { backgroundColor: '#fff', padding: 20, marginHorizontal: 20, marginBottom: 40, borderRadius: 10, elevation: 3 },
  formTitle: { fontSize: 20, fontWeight: 'bold', color: '#0033A0', marginBottom: 15, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12, backgroundColor: '#fafafa', fontSize: 15 },
  label: { fontSize: 15, fontWeight: 'bold', color: '#0033A0', marginTop: 10, marginBottom: 5 },
  pickerContainer: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 12, backgroundColor: '#fafafa' },
  slider: { width: '100%', height: 40 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12, paddingHorizontal: 5 },
  botoesContainer: { marginTop: 20 },
  footerInfo: { marginTop: 25, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 15, paddingBottom: 5 },
  footerText: { fontSize: 14, color: '#0033A0', fontWeight: 'bold', fontStyle: 'italic' }
});