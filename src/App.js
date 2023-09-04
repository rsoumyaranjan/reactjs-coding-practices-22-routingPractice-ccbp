.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.responsive-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80vh;
  border: 4px solid #551e53;
  border-radius: 12px;
}

@media (max-width: 576px) {
  .responsive-container {
    width: 85%;
  }
}

.app-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}