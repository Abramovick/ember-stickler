export default {
  validate(value, messages) {
    const length = this.get('maxLength');

    if (!value || value.length > parseInt(length)) {
      const message = this.getWithDefault('maxLengthMessage', `Max length of ${length} allowed`);

      messages.push(message);

      return false;
    }

    return true;
  }
}
