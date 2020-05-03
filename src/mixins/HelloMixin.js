export default {
  data() {
    return {
      mixName: "Mixin World",
    };
  },
  methods: {
    showAlert(msg) {
      alert(`You asked me to alert you, ${this.mixName}`);
    },
  },
};
