class TestDataEmptyArray(object):
    
    @staticmethod
    def get_array():
        # complete this function
        return []

class TestDataUniqueValues(object):

    @staticmethod
    def get_array():
        # complete this function
        array = [1,2,3,4,5]
        return array

    @staticmethod
    def get_expected_result():
        # complete this function
        array = [1,1,2,3,4,5]
        return array.index(min(array))
        
class TestDataExactlyTwoDifferentMinimums(object):

    @staticmethod
    def get_array():
        # complete this function
        array = [1,1,2,3,4,5]
        return array

    @staticmethod
    def get_expected_result():
        # complete this function
        array = [1,1,2,3,4,5]
        return array.index(min(array))
