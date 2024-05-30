import FormContent from "@/components/FormContent";

const FormMain = ({...rest}) => {
    console.log('Form', rest);
    return (
        <div>
            <FormContent />
        </div>
    );
};

export default FormMain;