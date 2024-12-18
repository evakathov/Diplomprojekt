import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background6 from "@/components/Background6";
import DonorStore from "@/app/stores/DonorStore";

export default function UploadBabyPictureScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const donorId = DonorStore.donorObject?.donorId; // Fetch the current donor's ID

  useEffect(() => {
    // Load the image for the current donorId on mount
    const loadSavedImage = async () => {
      if (donorId) {
        const savedImage = await AsyncStorage.getItem(`babyPicture_${donorId}`);
        if (savedImage) {
          setSelectedImage(savedImage);
        }
      }
    };
    loadSavedImage();
  }, [donorId]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
      setModalVisible(true);
    }
  };

  const saveImage = async () => {
    if (donorId && selectedImage) {
      try {
        await AsyncStorage.setItem(`babyPicture_${donorId}`, selectedImage);
        Alert.alert("", "Image saved successfully!");
      } catch (error) {
        console.error("Failed to save image:", error);
      }
    } else {
      Alert.alert("", "No image selected or donor ID missing.");
    }
    setModalVisible(false);
  };

  return (
    <Background6>
      <View style={styles.container}>
        <Text style={styles.title}>Upload Baby Picture</Text>
        <Text style={styles.description}>
          Please upload a baby picture. It must be between <Text style={styles.highlightText}>2 and 5 years old</Text> 
          and should <Text style={styles.highlightText}>not</Text> have been used on social media.
        </Text>

        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.roundImage} />
        )}

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Picture</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>

              <Text style={styles.modalText}>
                Do you want to save this picture?
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity onPress={saveImage} style={styles.modalOkButton}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.modalCancelButton}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Background6>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#555",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 20,
  },
  highlightText: {
    color: "#6C8B74",
    fontWeight: "600",
  },
  roundImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#E3EDDC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  uploadButtonText: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
    backgroundColor: "#E3EDDC",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeButtonText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 14,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    marginTop: 30,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOkButton: {
    backgroundColor: "#E3EDDC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  modalCancelButton: {
    backgroundColor: "#E3EDDC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
