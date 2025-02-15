import { ref } from "vue";

export default {
  setup() {
    const formData = ref({
      name: "",
      email: "",
      password: "",
    });

    const message = ref("");

    const handleSubmit = () => {
      console.log("Form submitted:", formData.value);
      message.value = "Signup successful!";
      // Here, you would send formData to a backend API.
    };

    return { formData, message, handleSubmit };
  },
};
