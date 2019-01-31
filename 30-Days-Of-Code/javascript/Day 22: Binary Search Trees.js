 this.getHeight = function(root) {

      // Add your code here
      if (!root) {
          return -1;
      } else {
          return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
      }

  };
