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
import Entypo from "react-native-vector-icons/Entypo";


export default function ClinicDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Reviews");
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Jonathan Randy",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ratings: 1,
      Image:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
    },
    {
      id: 2,
      name: "Jonathan Randy",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ratings: 2,
      Image:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
    },
    {
      id: 3,
      name: "Jonathan Randy",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ratings: 3,
      Image:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
    },
    {
      id: 4,
      name: "Jonathan Randy",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ratings: 4,
      Image:
        "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
    },
    {
      id: 5,
      name: "Jonathan Randy",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ratings: 5,
      Image:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
    },
  ];
  const [reviewslist, setReviewsList] = useState(reviews);
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
            {reviewslist.map((item) => (
              <View key={item.id} style={styles.reviewCard}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.Image }}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 20,
                        marginRight: 10,
                      }}
                    />
                    <Text style={styles.reviewerName}>{item.name}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {[...Array(item.ratings)].map(() => {
                      return <Entypo name="star" color="gold" size={20} />;
                    })}
                    {[...Array(5 - item.ratings)].map(() => {
                      return <Entypo name="star" color="gray" size={20} />;
                    })}
                  </View>
                </View>
                <Text style={styles.reviewText}>{item.review}</Text>
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
              <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.modalTitle}>Write A Review</Text>
                  <TouchableOpacity onPress={()=> setShowModal(false)}>
                    <Entypo name="cross" color="#000" size={26} />
                  </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => setRating(star)}>
                    <Entypo
                      name="star"
                      size={24}
                      color={star <= rating ? "gold" : "gray"}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                placeholder="Type your review..."
                value={reviewText}
                onChangeText={setReviewText}
                style={styles.modalInput}
                multiline
              />
              <TouchableOpacity
  onPress={() => {
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (reviewText.trim() === "") {
      alert("Please write a review.");
      return;
    }
    const user = {
  name: "Alice Smith",
  image: "https://i.pravatar.cc/150?img=5",
};
    const newReview = {
      id: reviewslist.length + 1,
      name: user.name,
      review: reviewText.trim(),
      ratings: rating,
      Image: user.image,
    };

    setReviewsList([newReview, ...reviewslist]);
    setShowModal(false);
    setReviewText("");
    setRating(0);
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
