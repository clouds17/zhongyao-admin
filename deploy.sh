echo "--------本地库状态----------"
git status
echo "--------本地状态库----------"
while :
do
    read -r -p "是否继续提交？[N/Y]" input
    case $input in
        [yY][eE][sS] | [yY])
            echo "----------继续提交----------"
            read -r -p "请输入commit名称:" createAt
            git pull origin main
            git add .
            git commit -m "${createAt}"
            git push origin main
            echo "---------- 提交成功 ---------"
            sleep 1
            exit 1
            ;;
        [nN][oO] | [nN])
            echo "---------- 提交中断 ---------"
            sleep 1
            exit 1
            ;;
        *)
            echo "----------输入错误，请重新输入-----------"
            continue
            ;;
    esac
done
        
