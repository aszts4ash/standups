#include <iostream>
#include <fstream>
#include <vector>
#include <string>

int main() {
    std::string filename = "main";
    std::string project = "standups";

    std::cout << "Project: " << project << ", File: " << filename << "\n";

    std::ifstream file(filename);
    if (!file.is_open()) {
        std::cerr << "Cannot open file: " << filename << "\n";
        return 1;
    }

    std::vector<std::string> lines;
    std::string line;
    while (std::getline(file, line)) {
        lines.push_back(line);
    }
    file.close();

    for (const auto &l : lines) {
        std::cout << l << "\n";
    }

    return 0;
}

# Additional Implementation 1760618359

# Code Update 1760618359-3923

# Additional Implementation 1760618359
