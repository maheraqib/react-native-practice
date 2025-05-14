// ClinicDetailsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modal, TextInput } from "react-native";

export default function ClinicDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Reviews");
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <Text style={styles.contentText}>
            {" "}
            About the clinic: Address, Team size, Practice type...
          </Text>
        );
      case "Reviews":
        return (
          <View style={styles.reviewContainer}>
            {[1, 2, 3, 4].map((item, index) => (
              <View key={index} style={styles.reviewCard}>
                <Text style={styles.reviewerName}>Jonathan Randy</Text>
                <Text style={styles.reviewText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            ))}
          </View>
        );
      case "Jobs":
        return (
          <Text style={styles.contentText}>
            {" "}
            Available jobs will be listed here.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.detailsBox}>
        {/* Tab Buttons */}
        <View style={styles.tabBar}>
          {["About", "Reviews", "Jobs"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <ScrollView style={styles.contentBox}>{renderContent()}</ScrollView>

        {/* Write Review Button */}
        {activeTab === "Reviews" && (
          <TouchableOpacity
            style={styles.writeReviewButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.writeReviewText}>Write A Review</Text>
          </TouchableOpacity>
        )}
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Write A Review</Text>
              <TextInput
                placeholder="Type your review..."
                value={reviewText}
                onChangeText={setReviewText}
                style={styles.modalInput}
                multiline
              />
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                }}
                style={styles.submitButton}
              >
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
  },

  detailsBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "#666",
    marginBottom: 16,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#f3eafe",
    borderRadius: 25,
    padding: 4,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: "#a678f2",
  },
  tabButtonText: {
    color: "#444",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff",
  },
  contentBox: {
    flex: 1,
    marginTop: 10,
  },
  contentText: {
    fontSize: 16,
    color: "#444",
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewCard: {
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewerName: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  reviewText: {
    color: "#666",
  },
  writeReviewButton: {
    backgroundColor: "#a678f2",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 12,
  },
  writeReviewText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#a678f2",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
});
